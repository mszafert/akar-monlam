import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
  ],
  theme: {
    colors: {
      blue: '#0085fe',
    },
  },
  transformers: [transformerDirectives()],
});
