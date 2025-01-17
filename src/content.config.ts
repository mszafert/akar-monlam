import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  teachings: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/teachings' }),
    schema: z.object({
      date: z.date(),
      type: z.ZodEnum.create(['upcoming', 'ongoing', 'past']),
      title: z.array(z.string()),
    }),
  }),
};
