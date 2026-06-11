/**
 * Normalise les anciennes URLs de tags (/blog/tag/JavaScript/, /blog/tag/d%C3%A9veloppement%20web/, …)
 * vers le slug canonique, ou redirige vers /blog/ si le tag n’existe plus.
 */
function slugifyTag(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function withTrailingSlash(pathname) {
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Anciens slugs de la taxonomie (32 tags) → slug canonique (10 tags). */
const LEGACY_TAG_SLUGS = {
  'site-internet': 'site-web-cabinet',
  'site-internet-psychologue': 'site-web-cabinet',
  'site-web-psychologue': 'site-web-cabinet',
  'creation-de-site': 'site-web-cabinet',
  'refonte-site-internet': 'site-web-cabinet',
  'prix-site-internet': 'site-web-cabinet',
  'site-fait-maison': 'site-web-cabinet',
  'nom-de-domaine': 'site-web-cabinet',
  'seo-local': 'referencement-local-cabinet',
  'referencement-local': 'referencement-local-cabinet',
  'referencement': 'referencement-local-cabinet',
  'visibilite-locale': 'referencement-local-cabinet',
  'visibilite-google': 'referencement-local-cabinet',
  'visibilite-en-ligne': 'referencement-local-cabinet',
  'installation-liberale': 'installation-en-liberal',
  's-installer-en-liberal-psychologue': 'installation-en-liberal',
  'cabinet-liberal': 'installation-en-liberal',
  'salaire-psychologue-liberal': 'installation-en-liberal',
  'revenu-psychologue-liberal': 'installation-en-liberal',
  deontologie: 'cadre-deontologique',
  rgpd: 'cadre-deontologique',
  accessibilite: 'cadre-deontologique',
  'avis-google': 'google-business-profile',
  'e-reputation': 'google-business-profile',
  instagram: 'reseaux-sociaux',
  'psychologue-en-ligne': 'reseaux-sociaux',
  psychomotricite: 'psychomotricien',
};

/** @param {import('@cloudflare/workers-types').EventContext} context */
export async function onRequest(context) {
  const { params, request, next } = context;
  const url = new URL(request.url);
  const slug = slugifyTag(decodeURIComponent(params.tag));
  const legacyTarget = LEGACY_TAG_SLUGS[slug];
  const targetSlug = legacyTarget ?? slug;
  const canonicalPath = withTrailingSlash(`/blog/tag/${targetSlug}`);
  const currentPath = withTrailingSlash(url.pathname);

  if (currentPath !== canonicalPath) {
    return Response.redirect(new URL(canonicalPath, url.origin).href, 301);
  }

  const response = await next();
  if (response.status === 404) {
    return Response.redirect(new URL('/blog/', url.origin).href, 301);
  }
  return response;
}
