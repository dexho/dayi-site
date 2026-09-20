import type { ImageMetadata } from 'astro';
import type { HTMLAttributes } from 'astro/types';

/* -------------------------------------------------------------------------
 * Metadata (SEO)
 * ---------------------------------------------------------------------- */

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

/* -------------------------------------------------------------------------
 * Shared pieces
 * ---------------------------------------------------------------------- */

export interface Image {
  src: string | ImageMetadata;
  alt?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
  /** Makes the whole item a link (used by Features2 cards). */
  href?: string;
}

export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

/* -------------------------------------------------------------------------
 * Widgets
 * ---------------------------------------------------------------------- */

export interface HeroImage extends Image {
  /** `cover` (default) crops the picture to the hero's frame; `auto` shows it whole at its natural proportions, for illustrations with a transparent background. */
  aspect?: 'cover' | 'auto';
  /** Any other attribute is forwarded to the <img>. */
  [attribute: string]: unknown;
}

export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
  /** Small pill above the tagline, e.g. "Preclinical stage". */
  badge?: string;
  content?: string;
  actions?: string | CallToAction[];
  image?: string | HeroImage;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface ContentImage extends Image {
  /** Crop of the picture: `1/1` (default), `4/3`, `3/4` for portraits, or `auto` to keep the natural height without cropping. */
  aspect?: '4/3' | '1/1' | '3/4' | 'auto';
  /** Any other attribute is forwarded to the <img> (e.g. `loading`, `fetchpriority`). */
  [attribute: string]: unknown;
}

export interface Content extends Omit<Headline, 'classes'>, Widget {
  content?: string;
  image?: string | ContentImage;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

export interface Steps extends Omit<Headline, 'classes'>, Widget {
  items?: Array<Item>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Stats extends Omit<Headline, 'classes'>, Widget {
  stats?: Array<Stat>;
  /** Animate numeric amounts from 0 when they scroll into view (off with reduced motion). */
  countUp?: boolean;
}

export interface TeamMember {
  name: string;
  role?: string;
  /** Square headshot; without one the member's initials are shown. */
  image?: Image;
  bio?: string;
  links?: Array<{ icon: string; href: string; ariaLabel?: string }>;
}

export interface Team extends Omit<Headline, 'classes'>, Widget {
  members?: Array<TeamMember>;
  columns?: number;
}
