import antfu from '@antfu/eslint-config';

export default antfu({
  astro: true,
  stylistic: {
    semi: true,
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});
