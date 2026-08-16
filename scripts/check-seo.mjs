import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const projectRoot = process.cwd();
const distDir = join(projectRoot, 'dist');
const sitemapPath = join(distDir, 'sitemap-0.xml');
const redirectsPath = join(projectRoot, 'public', '_redirects');
const siteOrigin = 'https://nicodev.fr';

if (!existsSync(distDir) || !existsSync(sitemapPath)) {
  console.error("SEO check: dist/ ou sitemap-0.xml absent. Lancez d'abord `npm run build`.");
  process.exit(1);
}

const walk = (directory) =>
  readdirSync(directory).flatMap((entry) => {
    const absolutePath = join(directory, entry);
    return statSync(absolutePath).isDirectory() ? walk(absolutePath) : [absolutePath];
  });

const htmlFiles = walk(distDir).filter((file) => file.endsWith('.html'));
const sitemapXml = readFileSync(sitemapPath, 'utf8');
const sitemapUrls = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replace(/\/$/, '')),
);
const redirectSources = new Set(
  existsSync(redirectsPath)
    ? readFileSync(redirectsPath, 'utf8')
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .map((line) => line.split(/\s+/)[0].replace(/\/$/, ''))
    : [],
);

const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

const getAttribute = (html, tagPattern, attribute) => {
  const tag = html.match(tagPattern)?.[0];
  return tag?.match(new RegExp(`${attribute}=["']([^"']*)["']`, 'i'))?.[1]?.trim() ?? '';
};

const addDuplicateCandidate = (map, value, route) => {
  if (!value) return;
  const normalized = value.replace(/\s+/g, ' ').trim().toLowerCase();
  map.set(normalized, [...(map.get(normalized) ?? []), route]);
};

const routeForFile = (file) => {
  const webPath = relative(distDir, file).split(sep).join('/');
  if (webPath === 'index.html') return '/';
  if (webPath.endsWith('/index.html')) return `/${webPath.slice(0, -'index.html'.length)}`;
  return `/${webPath}`;
};

const internalTargetExists = (pathname) => {
  const normalizedPath = decodeURIComponent(pathname).replace(/\/$/, '') || '/';
  if (redirectSources.has(normalizedPath)) return true;
  if (
    normalizedPath.startsWith('/_astro/') ||
    normalizedPath.startsWith('/images/') ||
    normalizedPath.startsWith('/brand/')
  ) {
    return existsSync(join(distDir, normalizedPath.slice(1)));
  }

  const relativePath = normalizedPath.slice(1);
  const candidates =
    normalizedPath === '/'
      ? [join(distDir, 'index.html')]
      : [
          join(distDir, relativePath),
          join(distDir, relativePath, 'index.html'),
          join(distDir, `${relativePath}.html`),
        ];
  return candidates.some(existsSync);
};

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const visibleHtml = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '');
  const route = routeForFile(file);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
  const description = getAttribute(html, /<meta\s+[^>]*name=["']description["'][^>]*>/i, 'content');
  const robots = getAttribute(
    html,
    /<meta\s+[^>]*name=["']robots["'][^>]*>/i,
    'content',
  ).toLowerCase();
  const canonical = getAttribute(html, /<link\s+[^>]*rel=["']canonical["'][^>]*>/i, 'href');
  const h1Count = (visibleHtml.match(/<h1\b/gi) ?? []).length;
  const indexable = !robots.includes('noindex') && route !== '/404.html';

  if (!title) errors.push(`${route}: balise title absente`);
  if (!canonical) errors.push(`${route}: canonical absente`);

  if (indexable) {
    if (!description) errors.push(`${route}: meta description absente`);
    if (h1Count !== 1) errors.push(`${route}: ${h1Count} H1 détecté(s), 1 attendu`);
    if (!sitemapUrls.has(canonical.replace(/\/$/, ''))) {
      errors.push(`${route}: page indexable absente du sitemap (${canonical})`);
    }
    addDuplicateCandidate(titles, title, route);
    addDuplicateCandidate(descriptions, description, route);
  } else if (
    canonical &&
    sitemapUrls.has(canonical.replace(/\/$/, '')) &&
    canonical === `${siteOrigin}${route}`
  ) {
    errors.push(`${route}: page noindex présente dans le sitemap`);
  }

  for (const match of visibleHtml.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const pathname = new URL(href, siteOrigin).pathname;
    if (!internalTargetExists(pathname))
      errors.push(`${route}: lien interne introuvable ${pathname}`);
  }
}

for (const [title, routes] of titles) {
  if (routes.length > 1) warnings.push(`title dupliqué « ${title} »: ${routes.join(', ')}`);
}
for (const [description, routes] of descriptions) {
  if (routes.length > 1)
    warnings.push(`description dupliquée « ${description} »: ${routes.join(', ')}`);
}

for (const warning of warnings) console.warn(`AVERTISSEMENT: ${warning}`);
for (const error of errors) console.error(`ERREUR: ${error}`);

if (errors.length > 0) {
  console.error(
    `SEO check échoué: ${errors.length} erreur(s), ${warnings.length} avertissement(s).`,
  );
  process.exit(1);
}

console.log(
  `SEO check réussi: ${htmlFiles.length} pages HTML, ${sitemapUrls.size} URL de sitemap, ${warnings.length} avertissement(s).`,
);
