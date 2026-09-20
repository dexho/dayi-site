import { SITE } from 'astrowind:config';

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

/** Absolute URL of a path, honouring the configured `trailingSlash`. */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/**
 * Site-relative link for a page path. External links, anchors and `mailto:`/
 * `tel:` URLs are returned untouched, so navigation entries coming from
 * `src/content/site.md` can mix internal paths and external addresses.
 */
export const getPermalink = (slug = ''): string => {
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(slug) || /^(#|mailto:|tel:)/i.test(slug)) {
    return slug;
  }

  return createPath(BASE_PATHNAME, createPath(slug));
};

export const getHomePermalink = (): string => getPermalink('/');

/** Path of a file served from `public/`. */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
