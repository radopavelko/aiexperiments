import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const aiExperiments = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/ai-experiments",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const disconnectToConnect = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/disconnect-to-connect",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  "ai-experiments": aiExperiments,
  "disconnect-to-connect": disconnectToConnect,
};
