// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  integrations: [UnoCSS({ injectReset: true })],
});
