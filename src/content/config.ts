import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

const pricingItemSchema = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string().optional(),
  duration: z.string().optional(),
});
const pricingCategorySchema = z.object({
  name: z.string(),
  items: z.array(pricingItemSchema),
});
const pricingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    categories: z.array(pricingCategorySchema).optional(),
    items: z.array(pricingItemSchema).optional(),
    note: z.string().optional(),
  }),
});

const historyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

const reviewsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    reviews: z.array(z.object({
      author: z.string(),
      text: z.string(),
      stars: z.number().min(1).max(5),
      date: z.string().optional(),
    })),
    googleProfileUrl: z.string().optional(),
  }),
});

export const collections = {
  about: aboutCollection,
  pricing: pricingCollection,
  history: historyCollection,
  reviews: reviewsCollection,
};
