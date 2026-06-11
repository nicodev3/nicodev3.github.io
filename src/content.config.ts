import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_TAGS } from './data/blog-tags';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      pubDate: z.string(),
      updatedDate: z.string().optional(),
      author: z.string(),
      image: image().optional(),
      tags: z
        .array(z.enum([...BLOG_TAGS]))
        .max(4, 'Maximum 4 tags par article')
        .optional(),
      /** Suffixe du `<title>` (après « Titre article | »). Défaut côté template : « Site web psychologues ». */
      metaTitleSuffix: z.string().optional(),
      /** Page pilier : active un schéma ItemList vers les articles du cluster visibilité. */
      guidePillarHub: z.boolean().optional(),
      /** Masque le sommaire automatique (h2) généré sur la page article. */
      hideArticleToc: z.boolean().optional(),
    }),
});

export const collections = {
  blog,
};
