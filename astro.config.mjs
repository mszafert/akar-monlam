import node from '@astrojs/node';
// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [UnoCSS({ injectReset: true })],
  site: 'https://akar.dotestow.net/',
  trailingSlash: 'always',
});
