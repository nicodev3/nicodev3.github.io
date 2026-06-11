/**
 * Taxonomie blog — libellés stables, assez précis pour le SEO cabinet de soin.
 * 2 à 4 tags par article ; pages /blog/tag/ indexées (taxonomie consolidée).
 */
export const BLOG_TAGS = [
  'psychologue',
  'psychomotricien',
  'site web cabinet',
  'référencement local cabinet',
  'google business profile',
  'installation en libéral',
  'cadre déontologique',
  'doctolib',
  'réseaux sociaux',
  'intelligence artificielle',
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

/** Ordre d’affichage (filtres blog, plan du site). */
export const BLOG_TAG_ORDER: readonly BlogTag[] = [
  'psychologue',
  'psychomotricien',
  'site web cabinet',
  'référencement local cabinet',
  'google business profile',
  'installation en libéral',
  'cadre déontologique',
  'doctolib',
  'réseaux sociaux',
  'intelligence artificielle',
];

export const BLOG_TAG_DESCRIPTIONS: Record<BlogTag, string> = {
  psychologue: 'Articles pour psychologues libéraux : site, visibilité et cadre professionnel.',
  psychomotricien: 'Articles pour psychomotriciens libéraux : site, SEO local et fiche Google.',
  'site web cabinet':
    'Création, refonte, budget, technique et contenus d’un site pour cabinet de soin.',
  'référencement local cabinet':
    'Visibilité Google locale, SEO et cohérence des signaux pour cabinets libéraux.',
  'google business profile':
    'Fiche Google Business Profile, avis et présence sur Maps.',
  'installation en libéral':
    'S’installer, budget, revenus et premiers patients en libéral.',
  'cadre déontologique': 'Déontologie, RGPD, accessibilité et communication régulée.',
  doctolib: 'Doctolib, prise de rendez-vous et complémentarité avec le site.',
  'réseaux sociaux': 'Instagram et réseaux sociaux au service de la visibilité du cabinet.',
  'intelligence artificielle': 'IA et assistants pour concevoir ou rédiger un site de cabinet.',
};

export function sortBlogTags(tags: readonly string[]): BlogTag[] {
  const set = new Set(tags);
  return BLOG_TAG_ORDER.filter((tag) => set.has(tag));
}
