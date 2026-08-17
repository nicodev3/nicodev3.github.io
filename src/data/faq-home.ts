/**
 * FAQ affichée sur l’accueil — source unique pour le HTML et le JSON-LD FAQPage.
 */
export interface HomeFaqItem {
	id?: string;
	question: string;
	answer: string;
}

export const homeFaqItems: HomeFaqItem[] = [
	{
		id: 'faq-delai',
		question:
			'Combien de temps faut-il pour lancer le site ?',
		answer:
			'En général deux à trois semaines selon vos disponibilités et le temps nécessaire pour compléter le formulaire de contenu ; cela peut être un peu plus rapide lorsque les éléments sont fournis vite.',
	},
	{
		id: 'faq-modifications',
		question: 'Que couvrent les modifications incluses dans les offres ?',
		answer:
			"L'offre Sérénité inclut 1 modification simple par mois (texte ou photo). L'offre Visibilité & Confiance inclut 3 modifications simples par mois, traitées en priorité, ainsi qu'une modernisation du site tous les ans. Les changements de structure (refonte complète du design) restent hors périmètre.",
	},
	{
		id: 'faq-contenu',
		question:
			"Je ne suis pas à l'aise pour écrire. Comment ça se passe pour le contenu ?",
		answer:
			'Le formulaire vous pose des questions courtes et concrètes : vos spécialités, votre approche, tarifs, horaires, lieu... Vos futurs patients cherchent surtout à être rassurés et à comprendre comment vous travaillez. Pas besoin de rédiger des textes longs : vous répondez simplement, et je structure le contenu pour qu\'il soit clair et rassurant.',
	},
	{
		id: 'faq-performance-mobile',
		question: 'Pourquoi dit-on que le site est rapide et léger ?',
		answer:
			'Le site est conçu sans systèmes lourds en arrière-plan. Les pages sont légères et s\'affichent rapidement, même sur mobile ou avec une connexion limitée. C\'est agréable pour vos visiteurs et bien vu par les moteurs de recherche.',
	},
	{
		question: 'En quoi votre approche est-elle différente d’une offre standardisée ?',
		answer:
			'Je ne fonctionne pas comme une usine à sites. Je préfère suivre peu de projets, avec un échange direct, pour adapter chaque site à la pratique, au ton et aux besoins réels du praticien. Il y a une base de travail sobre et éprouvée, mais elle est toujours retravaillée avec attention.',
	},
	{
		id: 'faq-doctolib-rdv',
		question:
			'Puis-je utiliser Doctolib, Qare ou un autre service de prise de rendez-vous ?',
		answer:
			'Oui. J\'intègre le widget de prise de rendez-vous de votre plateforme (Doctolib, Qare, Maiia ou équivalent) directement sur le site. Les sites sont aussi optimisés pour le mobile.',
	},
	{
		id: 'faq-site-existant',
		question: 'Et si j’ai déjà un site ?',
		answer:
			'Nous pouvons soit repartir de zéro avec une structure plus claire, soit nous inspirer de ce qui fonctionne déjà. Le diagnostic gratuit permet d’identifier ce qui est à garder, à simplifier ou à améliorer.',
	},
	{
		id: 'faq-engagement',
		question: 'Suis-je engagé sur une longue durée ?',
		answer:
			'Non. Les offres sont sans engagement de durée : vous pouvez arrêter l’abonnement à tout moment. Vous gardez ainsi de la souplesse si votre situation évolue.',
	},
	{
		question: 'Est-ce adapté si je débute en libéral ?',
		answer:
			'Oui. Le site est justement pensé pour vous aider à être visible dès vos débuts, avec des textes clairs pour expliquer votre pratique, vos publics accompagnés et vos modalités d’accueil.',
	},
	{
		question: 'Puis-je changer d’offre plus tard ?',
		answer:
			'Oui, vous pouvez passer d\'un plan à l\'autre selon l\'évolution de votre activité.',
	},
	{
		id: 'faq-sortie',
		question: 'Que se passe-t-il si j’arrête l’abonnement ?',
		answer:
			'Le site et les services associés (hébergement, mises à jour, support) s’arrêtent à la fin de la période déjà payée. Vous ne repartez pas les mains vides pour autant : le nom de domaine vous est transféré sur simple demande, et vous récupérez un export de vos contenus (textes et images fournies). Vous restez donc libre de continuer ailleurs avec votre adresse et vos textes.',
	},
];

/**
 * Sélection affichée sur l’accueil : les questions qui lèvent un frein avant la prise de contact.
 * La liste complète reste sur la page Tarifs.
 */
const HOME_FAQ_SHORTLIST_IDS = [
	'faq-contenu',
	'faq-doctolib-rdv',
	'faq-site-existant',
	'faq-modifications',
	'faq-engagement',
	'faq-sortie',
	'faq-delai',
] as const;

export const homeFaqShortlist: HomeFaqItem[] = HOME_FAQ_SHORTLIST_IDS.map((id) => {
	const item = homeFaqItems.find((entry) => entry.id === id);
	if (!item) throw new Error(`FAQ accueil : identifiant introuvable « ${id} »`);
	return item;
});
