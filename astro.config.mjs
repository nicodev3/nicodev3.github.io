// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const noindexPages = new Set([
  'https://nicodev.fr/merci/',
  'https://nicodev.fr/cgv/',
  'https://nicodev.fr/politique-confidentialite/',
  'https://nicodev.fr/dev/styleguide/',
]);

const isTagPage = (page) => {
  const pathname = new URL(page).pathname;
  return pathname.startsWith('/blog/tag/');
};

// https://astro.build/config
export default defineConfig({
  site: 'https://nicodev.fr',
  trailingSlash: 'always',

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !noindexPages.has(page) && !isTagPage(page),
    }),
  ]
});
