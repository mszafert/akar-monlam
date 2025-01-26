import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  registration: defineAction({
    accept: 'form',
    input: z.object({
      firstName: z.string(),
      lastName: z.string().optional(),
      email: z.string().email(),
      studieQuestion: z.enum(['yes', 'no']),
      adminQuestion: z.string().optional(),
      donation: z.number(),
    }),
    handler: async () => {
      return { message: 'Thank you!' };
    },
  }),
};
