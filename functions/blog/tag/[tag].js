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

/** @param {import('@cloudflare/workers-types').EventContext} context */
export async function onRequest(context) {
  const { params, request, next } = context;
  const url = new URL(request.url);
  const slug = slugifyTag(decodeURIComponent(params.tag));
  const canonicalPath = withTrailingSlash(`/blog/tag/${slug}`);
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
