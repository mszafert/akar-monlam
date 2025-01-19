import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [
    presetIcons(),
    presetTypography(),
    presetUno(),
  ],
  theme: {
    colors: {
      blue: '#0085fe',
      darkblue: '#0059aa',
    },
  },
  transformers: [transformerDirectives()],
});
