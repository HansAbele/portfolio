// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://johantaveras.vercel.app',
  trailingSlash: 'never',
  // Inline ALL component stylesheets into the HTML head — for our case the
  // total CSS is ~12KB, well under the 4KB-per-stylesheet default 'auto'
  // threshold but small enough that one inline blob is faster than a
  // render-blocking external request (saves ~430ms on mobile per Lighthouse).
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  i18n: {
    // English is the default — the site targets an English-speaking
    // audience first; Spanish (/es) is the secondary locale for LATAM.
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap(),
    icon({
      // Only ship the icon collections we actually use.
      include: {
        devicon: ['*'],
        'simple-icons': ['*'],
        lucide: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
