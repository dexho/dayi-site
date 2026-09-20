/**
 * Renders markdown found in *frontmatter strings* to HTML at build time.
 *
 * Page bodies are rendered by Astro itself (`render(entry)`), but the
 * structured copy in `src/content/**` frontmatter — headings, card
 * descriptions, job descriptions — is plain YAML text. Passing it through
 * here means the client can write `**bold**`, `[links](…)` and lists in those
 * fields too, instead of having to hand-write HTML.
 *
 * Every widget prints its text with `set:html`, so the returned HTML drops
 * straight into `title`, `subtitle`, `description`… props.
 */
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

// One processor per build (module scope is evaluated once).
const processor = await createMarkdownProcessor({
  gfm: true,
  smartypants: true,
});

/** Block-level markdown: paragraphs, lists, headings. */
export const md = async (text?: string): Promise<string | undefined> => {
  if (!text) return undefined;
  const { code } = await processor.render(text);
  return code;
};

/**
 * Inline markdown: same as `md()` without the wrapping `<p>`, for fields the
 * widgets already put inside their own element (a heading, a table cell).
 */
export const mdInline = async (text?: string): Promise<string | undefined> => {
  const html = await md(text);
  if (!html) return undefined;
  const single = html.trim();
  return single.startsWith('<p>') && single.endsWith('</p>') && single.indexOf('<p>', 3) === -1
    ? single.slice(3, -4)
    : single;
};

/** Maps `md()` over a list of `{ title, description }`-shaped items. */
export const mdItems = async <T extends { title?: string; description?: string }>(items?: T[]): Promise<T[]> =>
  Promise.all(
    (items ?? []).map(async (item) => ({
      ...item,
      title: await mdInline(item.title),
      description: await md(item.description),
    }))
  );
