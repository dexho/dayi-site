/**
 * Content schemas — the field reference for everything in `src/content/`.
 *
 * Each markdown file is its own collection with its own schema, so a missing
 * or misspelled field fails the build with a message naming the file and the
 * field, instead of silently rendering an empty section.
 *
 * Any text field accepts markdown (`**bold**`, `[link](/path)`, lists): the
 * pages run those strings through `src/utils/markdown.ts`.
 *
 * Editing guide for non-developers: CONTENT.md
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/* --------------------------------------------------------------------------
 * Shared building blocks
 * ------------------------------------------------------------------------ */

/**
 * An image. `src` is either a file in `src/assets/images/` written as
 * `~/assets/images/name.jpg`, or a full `https://…` URL.
 * `alt` describes the image for screen readers; use `''` if it is decorative.
 */
const image = z.object({
  src: z.string(),
  alt: z.string(),
});

/** A button or link. `variant: primary` is the filled accent button. */
const action = z.object({
  text: z.string(),
  href: z.string(),
  variant: z.enum(['primary', 'secondary', 'tertiary', 'link']).optional(),
  icon: z.string().optional(),
  target: z.string().optional(),
});

/** A link in the header, footer or a list. */
const link = z.object({
  text: z.string(),
  href: z.string(),
});

/**
 * One entry in a list of features, benefits or steps.
 * `icon` is any Tabler icon name, e.g. `tabler:dna-2` (browse: tabler.io/icons).
 */
const item = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
});

/** The heading block every section can carry. */
const headline = {
  tagline: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
};

/** Page-level SEO. Falls back to `src/config.yaml` when omitted. */
const seo = {
  /** Browser tab title and search result headline. */
  title: z.string(),
  /** Search result description, ~155 characters. */
  description: z.string(),
};

const hero = z.object({
  /** Small pill above the headline, e.g. "Preclinical stage". */
  badge: z.string().optional(),
  ...headline,
  image: image.optional(),
  actions: z.array(action).default([]),
});

const cta = z.object({
  ...headline,
  actions: z.array(action).default([]),
});

const section = <T extends z.ZodRawShape>(shape: T) => z.object({ ...headline, ...shape });

/* --------------------------------------------------------------------------
 * src/content/site.md — navigation, footer and contact details
 * ------------------------------------------------------------------------ */

const site = defineCollection({
  loader: glob({ pattern: 'site.md', base: 'src/content' }),
  schema: z.object({
    nav: z.object({
      links: z.array(link).default([]),
      /** Buttons at the right of the header. */
      actions: z.array(action).default([]),
    }),
    footer: z.object({
      /** Link columns. Keep to three or fewer for a tidy footer. */
      columns: z
        .array(
          z.object({
            title: z.string(),
            links: z.array(link).default([]),
          })
        )
        .default([]),
      /** Small links next to the company name (privacy, terms…). */
      secondaryLinks: z.array(link).default([]),
      /** Icon links, e.g. `{ icon: 'tabler:brand-linkedin', href: '…' }`. */
      socials: z
        .array(
          z.object({
            icon: z.string(),
            href: z.string(),
            ariaLabel: z.string(),
          })
        )
        .default([]),
      /** Copyright line. */
      note: z.string().optional(),
    }),
    /** Used by the careers page contact block and by `mailto:` buttons. */
    contact: z.object({
      email: z.string(),
      jobsEmail: z.string(),
      phone: z.string().optional(),
      address: z.string().optional(),
    }),
  }),
});

/* --------------------------------------------------------------------------
 * src/content/pages/*.md — one file per page
 * ------------------------------------------------------------------------ */

const page = <T extends z.ZodRawShape>(file: string, shape: T) =>
  defineCollection({
    loader: glob({ pattern: file, base: 'src/content/pages' }),
    schema: z.object({ ...seo, ...shape }),
  });

/** Landing page. The markdown body, if any, is prose above the closing CTA. */
const home = page('home.md', {
  hero,
  /** Three or four short selling points. */
  highlights: section({ items: z.array(item).default([]) }).optional(),
  /** Text-and-image block: `content` is the paragraph, `items` the checklist. */
  approach: section({
    content: z.string().optional(),
    items: z.array(item).default([]),
    image: image.optional(),
  }).optional(),
  /** Numbers strip. Remove the whole `stats:` block to hide it. */
  stats: section({
    items: z.array(z.object({ amount: z.string(), title: z.string() })).default([]),
  }).optional(),
  cta: cta.optional(),
});

/** Technology page. The markdown body is the long-form technical detail. */
const platform = page('platform.md', {
  hero,
  /** Card grid of the technology's main ideas. */
  pillars: section({ items: z.array(item).default([]) }).optional(),
  /** Numbered steps, shown as a timeline. */
  process: section({
    items: z.array(item).default([]),
    image: image.optional(),
  }).optional(),
  /** Heading for the markdown body below. Omit to render the body untitled. */
  details: section({}).optional(),
  cta: cta.optional(),
});

/** People page. Add a person by adding an entry under a group's `members`. */
const team = page('team.md', {
  hero,
  groups: z
    .array(
      z.object({
        ...headline,
        members: z
          .array(
            z.object({
              name: z.string(),
              role: z.string().optional(),
              /** Square headshot. Without one, the initials are shown. */
              image: image.optional(),
              bio: z.string().optional(),
              links: z
                .array(
                  z.object({
                    icon: z.string(),
                    href: z.string(),
                    ariaLabel: z.string(),
                  })
                )
                .default([]),
            })
          )
          .default([]),
        /** 2, 3 or 4 people per row. */
        columns: z.number().min(2).max(4).default(3),
      })
    )
    .default([]),
  cta: cta.optional(),
});

/** Careers + contact page. The markdown body is the "what it's like" prose. */
const careers = page('careers.md', {
  hero,
  /** What the company offers. */
  benefits: section({ items: z.array(item).default([]) }).optional(),
  openings: section({
    /** Shown when `items` is empty — e.g. during a hiring freeze. */
    emptyMessage: z.string().optional(),
    items: z
      .array(
        z.object({
          title: z.string(),
          location: z.string().optional(),
          /** e.g. "Full-time", "Contract", "Internship". */
          type: z.string().optional(),
          /** Overrides the site-wide jobs address for this role. */
          applyEmail: z.string().optional(),
          /** Markdown. Use `|` for a multi-paragraph description. */
          description: z.string().optional(),
        })
      )
      .default([]),
  }).optional(),
  /** Heading for the contact block; the addresses come from `site.md`. */
  contact: section({}).optional(),
});

export const collections = { site, home, platform, team, careers };
