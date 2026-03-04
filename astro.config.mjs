// @ts-check
import { defineConfig } from 'astro/config';
import { cpSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

/** @type {import('vite').Plugin} */
const copyTarteaucitron = {
  name: 'copy-tarteaucitron',
  buildStart() {
    const src = resolve('node_modules/tarteaucitronjs');
    const dest = resolve('public/tarteaucitron');
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    cpSync(src, dest, { recursive: true });
  },
};

const noindexPages = new Set([
  'https://nicodev.fr/merci/',
  'https://nicodev.fr/cgv/',
  'https://nicodev.fr/politique-confidentialite/',
  'https://nicodev.fr/dev/styleguide/',
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://nicodev.fr',
  trailingSlash: 'always',

  vite: {
      plugins: [tailwindcss(), copyTarteaucitron]
  },

  integrations: [
    sitemap({
      filter: (page) => !noindexPages.has(page),
    }),
  ]
});
