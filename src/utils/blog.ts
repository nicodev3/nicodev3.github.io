/** URL `/blog/{slug}/` — guide pilier visibilité en ligne (cluster SEO). */
export const GUIDE_VISIBILITE_PILLAR_SLUG = 'guide-complet-visibilite-en-ligne-psychologues';

export const GUIDE_VISIBILITE_PILLAR_HREF = `/blog/${GUIDE_VISIBILITE_PILLAR_SLUG}/`;

/**
 * Articles reliés par la page pilier « visibilité en ligne » (ordre = plan du guide).
 * Les autres billets du blog peuvent tout de même pointer vers la pilier.
 */
export const GUIDE_VISIBILITE_CLUSTER_IDS = [
  'google-business-profile-psychologue',
  'psychologue-premier-google-ville',
  'site-internet-psychologues',
  'nom-de-domaine-hebergement',
  'combien-coute-site-internet-2026',
  'creer-site-avec-ia-psychologue',
  'comment-trouver-premiers-patients-psychologue',
  'site-internet-psychologue-doctolib',
  'creation-site-internet',
] as const;

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
