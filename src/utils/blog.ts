/** URL `/blog/{slug}/` — guide pilier visibilité en ligne (cluster SEO). */
export const GUIDE_VISIBILITE_PILLAR_SLUG = 'guide-complet-visibilite-en-ligne-psychologues';

export const GUIDE_VISIBILITE_PILLAR_HREF = `/blog/${GUIDE_VISIBILITE_PILLAR_SLUG}/`;

/**
 * Articles reliés par la page pilier « visibilité en ligne » (ordre = plan du guide).
 * Les autres billets du blog peuvent tout de même pointer vers la pilier.
 */
export const GUIDE_VISIBILITE_CLUSTER_IDS = [
  'google-business-profile-psychologue',
  'avis-google-e-reputation-psychologue',
  'psychologue-premier-google-ville',
  'site-internet-psychologues',
  'nom-de-domaine-hebergement',
  'combien-coute-site-internet-2026',
  'creer-site-avec-ia-psychologue',
  'comment-trouver-premiers-patients-psychologue',
  'site-internet-psychologue-doctolib',
  'creation-site-internet',
] as const;

/** URL `/blog/{slug}/` — guide pilier installation en libéral (cluster SEO). */
export const GUIDE_INSTALLATION_PILLAR_SLUG = 'installer-liberal-psychologue-par-ou-commencer';

export const GUIDE_INSTALLATION_PILLAR_HREF = `/blog/${GUIDE_INSTALLATION_PILLAR_SLUG}/`;

/**
 * Chapitres détaillés du guide d’installation en libéral (ordre = parcours lecteur).
 * Les articles existants (salaire, visio, premiers patients) restent liés dans le texte du pilier.
 */
export const GUIDE_INSTALLATION_CLUSTER_IDS = [
  'preparer-installation-psychologue-liberal',
  'demarches-administratives-psychologue-liberal',
  'statut-juridique-psychologue-liberal',
  'fiscalite-tva-charges-psychologue-liberal',
  'ouvrir-cabinet-psychologue-local',
  'visibilite-installation-psychologue-liberal',
  'cadre-premiers-patients-psychologue-liberal',
] as const;

export const GUIDE_INSTALLATION_CHAPTERS = [
  {
    id: 'preparer-installation-psychologue-liberal',
    short: 'Préparer le projet',
    title: 'Se préparer avant de se lancer',
  },
  {
    id: 'demarches-administratives-psychologue-liberal',
    short: 'Démarches ARS / INPI',
    title: 'Les démarches administratives',
  },
  {
    id: 'statut-juridique-psychologue-liberal',
    short: 'Statut juridique',
    title: 'Choisir son statut juridique',
  },
  {
    id: 'fiscalite-tva-charges-psychologue-liberal',
    short: 'Fiscalité et charges',
    title: 'Fiscalité, TVA et charges',
  },
  {
    id: 'ouvrir-cabinet-psychologue-local',
    short: 'Le cabinet',
    title: 'Installer son cabinet',
  },
  {
    id: 'visibilite-installation-psychologue-liberal',
    short: 'Visibilité',
    title: 'Se rendre visible',
  },
  {
    id: 'cadre-premiers-patients-psychologue-liberal',
    short: 'Premiers patients',
    title: 'Accueillir ses premiers patients',
  },
] as const;

export type GuideInstallationChapterId = (typeof GUIDE_INSTALLATION_CLUSTER_IDS)[number];

export function isInstallationClusterArticle(articleId: string): boolean {
  return (
    articleId === GUIDE_INSTALLATION_PILLAR_SLUG ||
    (GUIDE_INSTALLATION_CLUSTER_IDS as readonly string[]).includes(articleId)
  );
}

export function isVisibilityClusterArticle(articleId: string): boolean {
  return (
    articleId === GUIDE_VISIBILITE_PILLAR_SLUG ||
    (GUIDE_VISIBILITE_CLUSTER_IDS as readonly string[]).includes(articleId)
  );
}

/** Tri blog : du plus récent au plus ancien (pubDate). */
export function comparePostsByPubDateDesc(
  a: { data: { pubDate: string } },
  b: { data: { pubDate: string } },
): number {
  return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
}

export function slugifyTag(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function toTagHref(value: string): string {
  return `/blog/tag/${slugifyTag(value)}/`;
}
