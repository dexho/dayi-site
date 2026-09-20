/**
 * Loads the single markdown file behind a page (or `site.md`).
 *
 * Each content collection in `src/content.config.ts` holds exactly one file,
 * so the page just wants "the entry" — and a clear error if the file was
 * renamed or deleted, rather than a blank page.
 */
import { getCollection, type CollectionEntry, type DataEntryMap } from 'astro:content';

export const getContent = async <C extends keyof DataEntryMap>(collection: C): Promise<CollectionEntry<C>> => {
  const entries = await getCollection(collection);
  const entry = entries[0];

  if (!entry) {
    throw new Error(
      `No content found for "${String(collection)}". Expected a markdown file for it under src/content/ ` +
        `(see the loader pattern in src/content.config.ts). Did the file get renamed or deleted?`
    );
  }

  return entry;
};
