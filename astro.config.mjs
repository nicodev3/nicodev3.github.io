// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://nicodev3.github.io',
    base: '/nicodev-astro',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        tailwindcss({
            config: { path: './tailwind.config.js' }
        })
    ]
});