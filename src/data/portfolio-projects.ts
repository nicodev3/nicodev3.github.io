import type { ImageMetadata } from 'astro';
import severineReisserImage from '../assets/images/screenshots/psychologue-leslilas.webp';
import marieJoseeGrassoImage from '../assets/images/screenshots/psychologue-sorgues.webp';
import delphineCimaImage from '../assets/images/screenshots/psychologue-manosque.webp';
import marieClaireBruneauImage from '../assets/images/screenshots/mcbruneau-psychologue-blois.webp';
import emanuelleFalliganImage from '../assets/images/screenshots/psychologue-sarrebourg.webp';
import stephanieRequetImage from '../assets/images/screenshots/psychologue-andrezieux-boutheon.webp';
import audreyLarcebauImage from '../assets/images/screenshots/psy-emdr-cotebasque.webp';
import montpellierPsychologueImage from '../assets/images/screenshots/montpellier-psychologue.webp';
import psychologueUzesImage from '../assets/images/screenshots/psychologue-uzes.webp';
import emmanuelleRoucheImage from '../assets/images/screenshots/emmarouche-psycho34.webp';
import florentSimonNancyImage from '../assets/images/screenshots/psychologue-nancy-florent-simon.webp';
import balintSmbFranceImage from '../assets/images/screenshots/balint-smb-france.webp';
import psychomotriciteMorgesImage from '../assets/images/screenshots/psychomotricite-morges.webp';
import joieCompassionImage from '../assets/images/screenshots/joiecompassion.webp';
import angelaBassompierreImage from '../assets/images/screenshots/angelabassompierre.webp';
import melanieAguillonImage from '../assets/images/screenshots/melanie-aguillon.webp';
import pierreDalarunImage from '../assets/images/screenshots/pierre-dalarun.webp';
import camillePerrinImage from '../assets/images/screenshots/camille-perrin-psychologue.webp';

export type PortfolioProfession =
	| 'psychologue'
	| 'psychotherapeute'
	| 'psychomotricien'
	| 'psychomotricienne'
	| 'association';

export const professionLabels: Record<PortfolioProfession, string> = {
	psychologue: 'Psychologue',
	psychotherapeute: 'Psychothérapeute',
	psychomotricien: 'Psychomotricien·ne',
	psychomotricienne: 'Psychomotricienne',
	association: 'Association professionnelle',
};

export type PortfolioProject = {
	title: string;
	image: ImageMetadata;
	url: string;
	location: string;
	year: number;
	profession: PortfolioProfession;
	/** Affiche « Refonte en 2026 » dans les métadonnées de la carte. */
	refonte2026?: boolean;
	/** Texte alternatif HTML si « Aperçu du site » est trop générique (SEO / a11y). */
	imageAlt?: string;
	/** Courte description du projet (ex. refonte WordPress). */
	description?: string;
	/** Étude de cas détaillée publiée sur Nicodev. */
	caseStudySlug?: string;
};

/**
 * Réalisations du portfolio, du plus récent au plus ancien.
 * L’ordre du tableau fait foi pour la home (3 premiers) et la page portfolio.
 */
export const portfolioProjects: PortfolioProject[] = [
	{
		title: 'Camille Perrin',
		image: camillePerrinImage,
		url: 'https://camille-perrin-psychologue.fr/',
		location: 'Le Chesnay',
		year: 2026,
		profession: 'psychologue',
		description:
			"Création d'un site vitrine pour consultations d'adultes et d'adolescents à partir de 16 ans, au cabinet au Chesnay (Versailles) et en visio.",
		imageAlt:
			'Site Camille Perrin — psychologue à Versailles et au Chesnay, consultations au cabinet et en visio',
	},
	{
		title: 'Mélanie Aguillon',
		image: melanieAguillonImage,
		url: 'https://melanie-aguillon.fr/',
		location: 'Bourgoin-Jallieu',
		year: 2026,
		profession: 'psychologue',
		description:
			"Création d'un site vitrine pour consultations d'adultes au cabinet et en visio, avec deux adresses à Bourgoin-Jallieu.",
		imageAlt:
			'Site Mélanie Aguillon — psychologue à Bourgoin-Jallieu, consultations au cabinet et en visio',
	},
	{
		title: 'Pierre Dalarun',
		image: pierreDalarunImage,
		url: 'https://pierredalarun.com/',
		location: 'Soudan',
		year: 2026,
		profession: 'psychotherapeute',
		caseStudySlug: 'pierre-dalarun',
		description:
			"Création d'un site vitrine pour présenter une approche psychocorporelle, les pratiques proposées et les consultations au cabinet ou en visio.",
		imageAlt:
			'Site Pierre Dalarun — psychothérapeute à Soudan près de Châteaubriant, consultations au cabinet et en visio',
	},
	{
		title: 'Angela Bassompierre',
		image: angelaBassompierreImage,
		url: 'https://angelabassompierre.fr/',
		location: 'France',
		year: 2026,
		profession: 'psychologue',
		description:
			"Création d'un site vitrine pour consultations psychologiques en ligne (approche intégrative, EFT, traumatismes).",
		imageAlt:
			'Site Angela Bassompierre — psychologue en ligne, consultations en visio pour adolescents et adultes',
	},
	{
		title: 'Isabelle Leboeuf',
		image: joieCompassionImage,
		url: 'https://joiecompassion.com/',
		location: 'Seclin',
		year: 2018,
		profession: 'psychologue',
		refonte2026: true,
		caseStudySlug: 'isabelle-leboeuf-joie-compassion',
		description:
			"Refonte visuelle et optimisation SEO d'un site WordPress (Joie & Compassion, TFC et programme MOOD).",
		imageAlt:
			'Site Joie & Compassion — refonte visuelle et SEO WordPress, Isabelle Leboeuf, thérapie fondée sur la compassion',
	},
	{
		title: 'Anne Dupuis-de Charrière',
		image: psychomotriciteMorgesImage,
		url: 'https://psychomotricite-morges.ch/',
		location: 'Morges',
		year: 2026,
		profession: 'psychomotricienne',
		imageAlt:
			'Site vitrine psychomotricité Anne Dupuis-de Charrière à Morges — accueil et prise de contact',
	},
	{
		title: 'Florent Simon',
		image: florentSimonNancyImage,
		url: 'https://psychologue-nancy-florent-simon.fr/',
		location: 'Nancy',
		year: 2015,
		profession: 'psychologue',
		imageAlt: 'Site vitrine psychologue Florent Simon à Nancy — accueil et prise de contact',
	},
	{
		title: 'Société Médicale Balint France',
		image: balintSmbFranceImage,
		url: 'https://www.balint-smb-france.org/',
		location: 'France',
		year: 2018,
		profession: 'association',
		imageAlt:
			'Site de la Société Médicale Balint France — groupes Balint, formations et actualités',
	},
	{
		title: 'Sabine Lacas',
		image: psychologueUzesImage,
		url: 'https://psychologue-uzes.fr/',
		location: 'Uzès',
		year: 2018,
		profession: 'psychologue',
		refonte2026: true,
		imageAlt:
			'Capture du site vitrine psychologue Sabine Lacas à Uzès — présentation et prise de contact',
	},
	{
		title: 'Marie-Josée Grasso',
		image: marieJoseeGrassoImage,
		url: 'https://psychologue-sorgues.com/',
		location: 'Sorgues',
		year: 2016,
		profession: 'psychologue',
		refonte2026: true,
		imageAlt:
			'Site internet psychologue Marie-Josée Grasso à Sorgues — page d’accueil et informations cabinet',
	},
	{
		title: 'Emma Rouche',
		image: emmanuelleRoucheImage,
		url: 'https://emmarouche-psycho34.com/',
		location: 'Castelnau-le-Lez',
		year: 2016,
		profession: 'psychologue',
		refonte2026: true,
		imageAlt:
			'Site vitrine psychologue Emma Rouche à Castelnau-le-Lez (agglomération montpelliéraine)',
	},
	{
		title: 'Laure Meslé Yaakoubi',
		image: montpellierPsychologueImage,
		url: 'https://montpellier-psychologue.pro/',
		location: 'Montpellier',
		year: 2016,
		profession: 'psychologue',
		refonte2026: true,
		caseStudySlug: 'laure-mesle-yaakoubi',
		imageAlt:
			'Site web psychologue à Montpellier — Laure Meslé Yaakoubi, capture page d’accueil',
	},
	{
		title: 'Séverine Reisser',
		image: severineReisserImage,
		url: 'https://psychologue-leslilas.fr/',
		location: 'Les Lilas',
		year: 2019,
		profession: 'psychologue',
		imageAlt: 'Site internet psychologue aux Lilas (Île-de-France) — Séverine Reisser',
	},
	{
		title: 'Delphine Cima',
		image: delphineCimaImage,
		url: 'https://psychologue-manosque.net/',
		location: 'Manosque',
		year: 2016,
		profession: 'psychologue',
		imageAlt: 'Site vitrine psychologue Delphine Cima à Manosque — contenus et contact',
	},
	{
		title: 'Marie-Claire Bruneau',
		image: marieClaireBruneauImage,
		url: 'https://mcbruneau-psychologue-blois.fr/',
		location: 'Blois',
		year: 2017,
		profession: 'psychologue',
		imageAlt: 'Site web psychologue Marie-Claire Bruneau à Blois — présentation du cabinet',
	},
	{
		title: 'Emanuelle FALLIGAN',
		image: emanuelleFalliganImage,
		url: 'https://psychologue-sarrebourg.fr/',
		location: 'Sarrebourg',
		year: 2016,
		profession: 'psychologue',
		imageAlt: 'Site internet psychologue Emanuelle Falligan à Sarrebourg — accueil',
	},
	{
		title: 'Stéphanie REQUET-CATINEAN',
		image: stephanieRequetImage,
		url: 'https://psychologue-andrezieux-boutheon.fr/',
		location: 'Andrézieux-Bouthéon',
		year: 2016,
		profession: 'psychologue',
		imageAlt:
			'Site vitrine psychologue à Andrézieux-Bouthéon (proximité bassin lyonnais) — Stéphanie Requet-Catinean',
	},
	{
		title: 'Audrey Larcebau',
		image: audreyLarcebauImage,
		url: 'https://psy-emdr-cotebasque.fr/',
		location: 'Côte basque',
		year: 2016,
		profession: 'psychologue',
		refonte2026: true,
		imageAlt:
			'Site psychologue EMDR Côte basque — Audrey Larcebau, refonte 2026, page d’accueil',
	},
];

/** Les N réalisations les plus récentes (ordre du tableau portfolio). */
export const getRecentPortfolioProjects = (count = 3): PortfolioProject[] =>
	portfolioProjects.slice(0, count);

export const formatPortfolioProjectMeta = (project: PortfolioProject): string => {
	const kind = project.refonte2026 ? 'Refonte' : 'Création';
	const year = project.refonte2026 ? 2026 : project.year;
	return `${kind} · ${professionLabels[project.profession]} · ${year}`;
};
