// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import llmsMd, {
  SITE_LLMS_DESCRIPTION,
  SITE_LLMS_NAME,
} from './src/integrations/llms-md.mjs';

/** URLs exactes à retirer du sitemap (noindex ou hors prod). */
const noindexUrlsExact = new Set([
  'https://nicodev.fr/dev/styleguide/',
  'https://nicodev.fr/dev/guide-installation-psychologues/',
  'https://nicodev.fr/site-web-psychologue/',
]);

/** @param {string} page */
const shouldIncludeInSitemap = (page) => {
  const pathname = new URL(page).pathname;
  if (pathname.startsWith('/merci')) return false;
  if (pathname.startsWith('/dev/')) return false;
  // Pages tags en noindex, follow (voir Layout.astro) : hors sitemap.
  if (pathname.startsWith('/blog/tag/')) return false;
  if (pathname === '/404' || pathname === '/404/') return false;
  if (pathname === '/site-web-psychologue/' || pathname === '/site-web-psychologue') return false;
  if (noindexUrlsExact.has(page)) return false;
  return true;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://nicodev.fr',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      /** @param {string} page */
      filter: (page) => shouldIncludeInSitemap(page),
    }),
    // Parcours fs local : ne pas utiliser llms() (glob Windows → llms.txt vides).
    llmsMd({
      siteUrl: 'https://nicodev.fr',
      name: SITE_LLMS_NAME,
      description: SITE_LLMS_DESCRIPTION,
    }),
  ]
});
