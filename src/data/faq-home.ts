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
		question:
			'Combien de temps faut-il pour lancer le site ?',
		answer:
			'En général deux à trois semaines selon vos disponibilités et le temps nécessaire pour compléter le formulaire de contenu ; cela peut être un peu plus rapide lorsque les éléments sont fournis vite.',
	},
	{
		id: 'faq-modifications',
		question: 'Que couvrent les modifications incluses dans les offres ?',
		answer:
			"L'offre Sérénité inclut 1 modification simple par mois (texte ou photo). L'offre Visibilité & Confiance inclut les modifications de contenu ainsi qu'une modernisation du site tous les ans. Les changements de structure (refonte complète du design) restent hors périmètre.",
	},
	{
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
			'Je ne fonctionne pas comme une usine à sites. Je préfère suivre peu de projets, avec un échange direct, pour adapter chaque site à la pratique, au ton et aux besoins réels du psychologue. Il y a une base de travail sobre et éprouvée, mais elle est toujours retravaillée avec attention.',
	},
	{
		id: 'faq-doctolib-rdv',
		question:
			'Puis-je utiliser Doctolib, Qare ou un autre service de prise de rendez-vous ?',
		answer:
			'Oui. J\'intègre le widget de prise de rendez-vous de votre plateforme (Doctolib, Qare, Maiia ou équivalent) directement sur le site. Les sites sont aussi optimisés pour le mobile.',
	},
	{
		question: 'Et si j’ai déjà un site ?',
		answer:
			'Nous pouvons soit repartir de zéro avec une structure plus claire, soit nous inspirer de ce qui fonctionne déjà. Le diagnostic gratuit permet d’identifier ce qui est à garder, à simplifier ou à améliorer.',
	},
	{
		question: 'Suis-je engagé sur une longue durée ?',
		answer:
			'Non. Les offres sont sans engagement de durée : vous pouvez arrêter l’abonnement à tout moment. Vous gardez ainsi de la souplesse si votre situation évolue.',
	},
	{
		question: 'Est-ce adapté si je débute en libéral ?',
		answer:
			'Oui. Le site est justement pensé pour vous aider à être visible dès vos débuts, avec des textes clairs pour expliquer votre pratique et rassurer vos premiers patients.',
	},
	{
		question: 'Puis-je changer d’offre plus tard ?',
		answer:
			'Oui, vous pouvez passer d\'un plan à l\'autre selon l\'évolution de votre activité.',
	},
	{
		question: 'Que se passe-t-il si j’arrête l’abonnement ?',
		answer:
			'Le site et les services associés (hébergement, mises à jour, support) sont arrêtés à la fin de la période payée. Vous pouvez demander un export simple des contenus principaux (textes) pour les conserver.',
	},
];
