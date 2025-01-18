import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  teachings: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/teachings' }),
    schema: ({ image }) => z.object({
      date: z.date(),
      status: z.ZodEnum.create(['upcoming', 'ongoing', 'past']),
      active: z.boolean().default(false),
      image: image().optional(),
      imageCaption: z.string().optional(),
      imageAlt: z.string().optional(),
      title: z.array(z.string()),
    }),
  }),
};
