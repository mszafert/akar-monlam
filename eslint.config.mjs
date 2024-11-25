import antfu from '@antfu/eslint-config';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default antfu({
  astro: true,
  formatters: true,
  stylistic: {
    semi: true,
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  unocss: true,
}, {
  plugins: {
    'jsx-a11y': jsxA11y,
  },
});
