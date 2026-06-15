const INDEX_HTML_SUFFIX = '/index.html';

export function normalizeCanonicalPath(pathname: string): string {
  let normalizedPath = pathname || '/';

  if (!normalizedPath.startsWith('/')) {
    normalizedPath = `/${normalizedPath}`;
  }

  if (normalizedPath === INDEX_HTML_SUFFIX) {
    return '/';
  }

  if (normalizedPath.endsWith(INDEX_HTML_SUFFIX)) {
    normalizedPath = normalizedPath.slice(0, -'index.html'.length);
  }

  if (!normalizedPath.endsWith('/') && !normalizedPath.split('/').at(-1)?.includes('.')) {
    normalizedPath = `${normalizedPath}/`;
  }

  return normalizedPath;
}

export function getCanonicalUrl(pathname: string, baseUrl: string | URL): string {
  return new URL(normalizeCanonicalPath(pathname), baseUrl).toString();
}
