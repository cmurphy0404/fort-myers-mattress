import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fortmyersmattressstore.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const url = item.url;
        if (url.endsWith('/') && !url.replace(/\/$/, '').includes('/', 8)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (url.includes('/book')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (url.includes('-mattress')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url.includes('/about')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
