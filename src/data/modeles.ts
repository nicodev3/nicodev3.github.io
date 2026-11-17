import type { ImageMetadata } from 'astro';
import terracottaImage from '../assets/images/screenshots/modele-terracotta.webp';
import saugeImage from '../assets/images/screenshots/modele-sauge.webp';
import ardoiseImage from '../assets/images/screenshots/modele-ardoise.webp';
import opaleImage from '../assets/images/screenshots/modele-opale.webp';

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
  {
    slug: 'sauge',
    nom: 'Sauge',
    ambiance: 'Calme & végétal',
    description:
      'Un haut de page vert profond avec une photo d’ambiance et un portrait en arche, puis des grilles à filets pour les motifs de consultation, dans un registre serein et lisible.',
    points: [
      'Vert forêt, titres en serif, filets fins plutôt que des cartes ombrées',
      'Portrait en arche et badge « titre + numéro d’inscription » dès le premier écran',
      'Pratiques illustrées, motifs en grille, encart Mon soutien psy en bande sombre',
    ],
    demoUrl: 'https://sauge.nicodev.fr/',
    image: saugeImage,
    imageAlt:
      'Démonstration du modèle Sauge : bande verte avec photo d’un cabinet végétal, portrait en arche d’une psychologue, titre et boutons de rendez-vous',
  },
  {
    slug: 'ardoise',
    nom: 'Ardoise',
    ambiance: 'Sobre & professionnel',
    description:
      'Un site net et lisible, en ardoise et gris-lavande, où le praticien, son titre et ses motifs de consultation se parcourent comme un index.',
    points: [
      'Ardoise et gris-lavande, une seule police sans empattement',
      'Portrait rectangulaire et badge d’inscription dès le premier écran',
      'Pratiques et motifs en lignes d’index, adresse du cabinet sur une plaque sombre à côté de la carte',
    ],
    demoUrl: 'https://ardoise.nicodev.fr/',
    image: ardoiseImage,
    imageAlt:
      'Démonstration du modèle Ardoise : bande gris-lavande, portrait d’une psychologue avec un cadre décalé, titre et boutons de rendez-vous',
  },
  {
    slug: 'opale',
    nom: 'Opale',
    ambiance: 'Lumineux & épuré',
    description:
      'Un site très aéré sur fond blanc, avec des touches de bleu ciel et de lilas, un portrait rond et des illustrations au trait, pour un premier contact léger et rassurant.',
    points: [
      'Blanc, bleu ciel et lilas très pâles, indigo pour les actions, titres en serif léger',
      'Portrait rond et badge « titre + numéro d’inscription » dès le premier écran',
      'Pratiques illustrées au trait, boutons et navigation en pastille, motifs sur une bande lilas',
    ],
    demoUrl: 'https://opale.nicodev.fr/',
    image: opaleImage,
    imageAlt:
      'Démonstration du modèle Opale : fond blanc lavé de lilas, portrait rond d’une psychologue, titre en serif léger et boutons de rendez-vous en pastille',
  },
];

export function getModele(slug: string): Modele | undefined {
  return modeles.find((modele) => modele.slug === slug);
}
