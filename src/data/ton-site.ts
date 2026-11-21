/**
 * Pages privées « Ton site est en ligne » : une par client, envoyée par mail après la mise en ligne.
 * Elles ne sont ni indexées (noindex) ni dans le sitemap, et aucune page du site n'y renvoie.
 *
 * Pour ajouter un client : une fiche ci-dessous, avec un suffixe aléatoire dans le slug
 * (ex. `node -e "console.log(require('crypto').randomBytes(3).toString('hex'))"`),
 * puis commit et push. L'URL est https://nicodev.fr/ton-site/<slug>/.
 *
 * Capture mobile (facultative) :
 * `node scripts/screenshot-site.mjs <url> src/assets/images/screenshots/mobile/<nom>.webp --mobile`
 */
import type { ImageMetadata } from 'astro';
import marinaMartinMobileImage from '../assets/images/screenshots/mobile/marina-martin-psychologue.webp';

export type Formule = 'serenite' | 'visibilite';

export type ClientHandover = {
	/** Segment d'URL, avec un suffixe aléatoire pour ne pas être devinable. */
	slug: string;
	/** Titre exact de la fiche dans `portfolio-projects.ts` (capture, URL, ville). */
	projet: string;
	/** Prénom utilisé dans le titre et les phrases. */
	prenom: string;
	/** Accord des adjectifs adressés au client (« satisfaite » / « satisfait »). */
	accord: 'feminin' | 'masculin';
	/** Formule choisie par le client : seule celle-ci et son lien de paiement sont affichés. */
	formule: Formule;
	/** Ce qui a été réalisé, en points courts et concrets. */
	realise: string[];
	/** Mot personnel facultatif, affiché sous le titre. */
	mot?: string;
	/** Capture du site sur téléphone, posée sur l'angle de la capture bureau. */
	captureMobile?: ImageMetadata;
};

export const clientHandovers: ClientHandover[] = [
	{
		slug: 'marina-martin-d3bb41',
		projet: 'Marina Martin',
		prenom: 'Marina',
		accord: 'feminin',
		formule: 'serenite',
		captureMobile: marinaMartinMobileImage,
		realise: [
			'Un site de 12 pages : consultations, bilan psychologique, analyse des pratiques, tes trois approches, tarifs, à propos et contact',
			'Le bouton de rendez-vous Doctolib sur toutes les pages',
			'Une rubrique articles prête à accueillir tes publications',
			'Le nom de domaine marina-martin-psychologue.fr, l’hébergement et les mentions légales',
			'Un référencement travaillé pour Templeuve-en-Pévèle : titre et description de chaque page, et les informations de ton cabinet (adresse, spécialité, questions fréquentes) lisibles par Google',
			'Un site préparé pour les assistants IA comme ChatGPT ou Gemini : tes informations y sont claires et bien organisées, pour qu’ils comprennent ta pratique et la présentent correctement quand on leur pose la question',
		],
	},
];
