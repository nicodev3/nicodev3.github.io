// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

/** URLs exactes à retirer du sitemap (noindex ou hors prod). */
const noindexUrlsExact = new Set([
  'https://nicodev.fr/dev/styleguide/',
  'https://nicodev.fr/dev/guide-installation-psychologues/',
]);

/** @param {string} page */
const shouldIncludeInSitemap = (page) => {
  const pathname = new URL(page).pathname;
  if (pathname.startsWith('/merci')) return false;
  if (pathname.startsWith('/blog/tag/')) return false;
  if (pathname.startsWith('/dev/')) return false;
  if (pathname === '/404' || pathname === '/404/') return false;
  if (noindexUrlsExact.has(page)) return false;
  return true;
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
      /* Une VF 400–700 = un seul .woff2 (évite 4 requêtes par graisse statique) */
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif-4',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      /** @param {string} page */
      filter: (page) => shouldIncludeInSitemap(page),
    }),
  ]
});
