import { defineConfig, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      blue: '#0085fe',
    },
  },
  transformers: [transformerDirectives()],
});
