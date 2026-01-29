import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fortmyersmattress.com', // UPDATE: Replace with your actual domain
  integrations: [
    tailwind(),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
