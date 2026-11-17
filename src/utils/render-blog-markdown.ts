import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { fileURLToPath } from 'node:url';
import { dirname, relative, resolve } from 'node:path';
import accessibleTables from '../integrations/accessible-tables.mjs';

type BlogMarkdownProcessor = Awaited<ReturnType<typeof createSatteriMarkdownProcessor>>;

let processorPromise: Promise<BlogMarkdownProcessor> | null = null;

function getBlogMarkdownProcessor(): Promise<BlogMarkdownProcessor> {
  processorPromise ??= createSatteriMarkdownProcessor({
    hastPlugins: [accessibleTables],
  });
  return processorPromise;
}

/** Images du dossier assets, indexées par chemin absolu depuis la racine du projet (/src/assets/...). */
const localImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{webp,png,jpg,jpeg,svg,avif,gif}',
);

const IMAGE_MARKER = /<img __ASTRO_IMAGE_="([^"]+)"[^>]*>/g;

const decodeAttr = (value: string): string =>
  value
    .replace(/&(?:#x22|quot);/g, '"')
    .replace(/&(?:#x27|apos);/g, "'")
    .replace(/&(?:amp|#x26|#38);/g, '&');

const escapeAttr = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/**
 * Le rendu Sätteri laisse des marqueurs __ASTRO_IMAGE_ (la transformation en vraie
 * balise img est faite par Astro pour les pages Markdown, pas pour ce rendu direct).
 * Sans ce remplacement, les images du corps de l'article sortent sans src ni alt.
 */
async function resolveImageMarkers(html: string, fileURL?: URL): Promise<string> {
  const matches = [...html.matchAll(IMAGE_MARKER)];
  if (matches.length === 0 || !fileURL) return html;

  const projectRoot = process.cwd();
  const baseDir = dirname(fileURLToPath(fileURL));
  let output = html;

  for (const match of matches) {
    const [fullTag, payload] = match;
    const { src, index: _index, ...props } = JSON.parse(decodeAttr(payload)) as {
      src: string;
      index?: number;
      alt?: string;
      title?: string;
    };

    const absolutePath = resolve(baseDir, src);
    const projectPath = '/' + relative(projectRoot, absolutePath).split('\\').join('/');
    const loader = localImages[projectPath];
    if (!loader) continue;

    const metadata = (await loader()).default;
    const image = await getImage({ src: metadata, alt: props.alt ?? '' });

    const attributes: Record<string, string | number> = {
      src: image.src,
      alt: props.alt ?? '',
      loading: 'lazy',
      decoding: 'async',
      ...(image.attributes as Record<string, string | number>),
    };
    if (props.title) attributes.title = props.title;
    if (image.srcSet.values.length > 0) attributes.srcset = image.srcSet.attribute;

    const tag = `<img ${Object.entries(attributes)
      .filter(([key, value]) => key === 'alt' || (value !== undefined && value !== ''))
      .map(([key, value]) => `${key}="${escapeAttr(String(value))}"`)
      .join(' ')}>`;
    output = output.replace(fullTag, tag);
  }

  return output;
}

/** Rendu Markdown aligné sur `astro.config.mjs` (Sätteri + tableaux accessibles + images résolues). */
export async function renderBlogMarkdownHtml(source: string, fileURL?: URL): Promise<string> {
  const processor = await getBlogMarkdownProcessor();
  const { code } = await processor.render(source, { fileURL, frontmatter: {} });
  return resolveImageMarkers(code, fileURL);
}
