// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  outDir: './public_nodejs',
  integrations: [UnoCSS({ injectReset: true })],
});
