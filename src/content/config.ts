import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

const pricingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    items: z.array(z.object({ name: z.string(), price: z.string() })),
    note: z.string().optional(),
  }),
});

const historyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  about: aboutCollection,
  pricing: pricingCollection,
  history: historyCollection,
};
