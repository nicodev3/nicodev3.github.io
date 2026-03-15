// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

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
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Source Sans 3',
      cssVariable: '--font-source-sans-3',
      weights: ['200 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Lora',
      cssVariable: '--font-lora',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !noindexPages.has(page) && !isTagPage(page),
    }),
  ]
});
