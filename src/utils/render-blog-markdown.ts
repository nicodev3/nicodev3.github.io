import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import accessibleTables from '../integrations/accessible-tables.mjs';

type BlogMarkdownProcessor = Awaited<ReturnType<typeof createSatteriMarkdownProcessor>>;

let processorPromise: Promise<BlogMarkdownProcessor> | null = null;

function getBlogMarkdownProcessor(): Promise<BlogMarkdownProcessor> {
  processorPromise ??= createSatteriMarkdownProcessor({
    hastPlugins: [accessibleTables],
  });
  return processorPromise;
}

/** Rendu Markdown aligné sur `astro.config.mjs` (Sätteri + tableaux accessibles). */
export async function renderBlogMarkdownHtml(source: string, fileURL?: URL): Promise<string> {
  const processor = await getBlogMarkdownProcessor();
  const { code } = await processor.render(source, { fileURL, frontmatter: {} });
  return code;
}
