// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import accessibleTables from './src/integrations/accessible-tables.mjs';
import { satteri } from '@astrojs/markdown-satteri';
import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Versioned first-party assets: no CDN dependency and safe immutable caching.
const consentAssets = () => {
  const source = new URL('./node_modules/tarteaucitronjs/', import.meta.url);
  const target = new URL('./public/tarteaucitron/1.35.1/', import.meta.url);
  mkdirSync(target, { recursive: true });
  for (const file of ['tarteaucitron.min.js', 'tarteaucitron.services.min.js', 'css', 'lang', 'LICENSE']) {
    cpSync(fileURLToPath(new URL(file, source)), fileURLToPath(new URL(file, target)), { recursive: true });
  }
};
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
  markdown: { processor: satteri({ hastPlugins: [accessibleTables] }) },
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [
    { name: 'local-consent-assets', hooks: { 'astro:config:setup': consentAssets } },
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
