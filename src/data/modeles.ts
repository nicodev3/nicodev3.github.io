import type { ImageMetadata } from 'astro';
import terracottaImage from '../assets/images/screenshots/modele-terracotta.webp';

/**
 * Modèles de site proposés aux psychologues : chacun est une démo publique (non indexée)
 * construite depuis le dépôt `nicodev-base-template` avec le même contenu fictif.
 * Ajouter un modèle = ajouter une entrée ici, une capture dans
 * `src/assets/images/screenshots/` et un projet Pages `demo-<slug>` (domaine `<slug>.nicodev.fr`).
 */
export type Modele = {
  slug: string;
  nom: string;
  /** Ambiance en quelques mots, affichée sous le nom. */
  ambiance: string;
  /** Une à deux phrases décrivant le style. */
  description: string;
  /** Ce qui caractérise le modèle, en trois points courts. */
  points: readonly string[];
  /** Adresse publique de la démo. */
  demoUrl: string;
  image: ImageMetadata;
  imageAlt: string;
};

export const modeles: readonly Modele[] = [
  {
    slug: 'terracotta',
    nom: 'Terracotta',
    ambiance: 'Chaleureux & rassurant',
    description:
      'Une page d’accueil qui présente d’abord le praticien : photo d’ambiance, portrait, titre et numéro d’inscription, puis les pratiques, les motifs de consultation et le cabinet.',
    points: [
      'Teintes terracotta et vert sauge, titres en serif',
      'Portrait et badge « titre + numéro d’inscription » dès le premier écran',
      'Cartes de pratiques avec illustration, motifs de consultation détaillés',
    ],
    demoUrl: 'https://terracotta.nicodev.fr/',
    image: terracottaImage,
    imageAlt:
      'Démonstration du modèle Terracotta : photo d’un cabinet, portrait d’une psychologue, titre et boutons de rendez-vous',
  },
];

export function getModele(slug: string): Modele | undefined {
  return modeles.find((modele) => modele.slug === slug);
}
