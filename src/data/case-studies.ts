import type { ImageMetadata } from 'astro';
import benedicteImage from '../assets/images/screenshots/benedictedonet-psyenligne.webp';
import isabelleImage from '../assets/images/screenshots/joiecompassion.webp';
import laureImage from '../assets/images/screenshots/montpellier-psychologue.webp';
import pierreImage from '../assets/images/screenshots/pierre-dalarun.webp';

export type CaseStudyMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type CaseStudy = {
  slug: string;
  person: string;
  siteName: string;
  profession: string;
  location: string;
  externalUrl: string;
  image: ImageMetadata;
  imageAlt: string;
  title: string;
  summary: string;
  challenge: string;
  objectives: string[];
  work: string[];
  resultsIntro: string;
  metrics: CaseStudyMetric[];
  dataPeriod: string;
  dataSource: string;
  interpretation: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'benedicte-donet',
    person: 'Bénédicte Donet',
    siteName: 'Psychologue en ligne',
    profession: 'Psychologue',
    location: 'Consultations en ligne',
    externalUrl: 'https://www.benedictedonet-psyenligne.com/',
    image: benedicteImage,
    imageAlt: 'Page d’accueil du site de Bénédicte Donet, psychologue en ligne',
    title: 'Rendre un site WordPress plus rapide, plus clair et plus simple à maintenir',
    summary:
      'Le site de Bénédicte présentait une activité riche, mais sa base WordPress était devenue difficile à maintenir et peu performante. La refonte devait améliorer la technique sans appauvrir la présentation de sa pratique.',
    challenge:
      'Plusieurs propositions cohabitent sur le site : consultations en ligne, psychotraumatologie, EMDR, sexualité, photothérapie et programmes. L’enjeu n’était donc pas seulement de moderniser l’apparence, mais de retrouver une structure fiable et une hiérarchie compréhensible.',
    objectives: [
      'Simplifier la maintenance et fiabiliser la base technique.',
      'Améliorer les performances et le confort de navigation.',
      'Hiérarchiser les différentes activités sans effacer leur singularité.',
      'Créer des parcours plus directs vers les informations et la prise de rendez-vous.',
      'Aider Google à mieux comprendre les pages consacrées à la psychologie en ligne, au trauma et à l’EMDR.',
    ],
    work: [
      'Reprise de la structure du site et de la navigation.',
      'Réorganisation des contenus autour des besoins des visiteurs.',
      'Refonte visuelle et optimisation de l’affichage sur mobile.',
      'Allègement technique du site WordPress et amélioration de ses performances.',
      'Travail sur les textes et l’organisation des pages pour qu’elles puissent être trouvées dans Google.',
    ],
    resultsIntro:
      'Pendant les trois premiers mois observés, le site a été affiché plus de 8 000 fois dans les résultats de Google et a reçu 251 visites depuis ces résultats. Les internautes le trouvent aussi en recherchant une spécialité, et pas seulement le nom de Bénédicte.',
    metrics: [
      { value: '8 083', label: 'affichages dans Google' },
      { value: '251', label: 'visites reçues depuis Google' },
      {
        value: '20',
        label: 'recherches sur lesquelles le site apparaît',
        detail: 'estimation de l’outil Ahrefs',
      },
      {
        value: '14',
        label: 'recherches où le site figure parmi les 10 premiers',
        detail: 'estimation de l’outil Ahrefs',
      },
    ],
    dataPeriod: 'Juin à août 2026 ; estimations complémentaires relevées en août 2026',
    dataSource:
      'Chiffres fournis par Google et consultés dans Ahrefs ; estimations Ahrefs pour les recherches détectées',
    interpretation: [
      'Le site est notamment trouvé sur des recherches concernant la psychologie en ligne, la téléconsultation, l’EMDR et le psychotraumatisme.',
      'Les nombres d’affichages et de visites sont mesurés directement par Google. Les nombres de recherches détectées restent des estimations d’Ahrefs.',
      'Trois mois restent une période courte : ces chiffres montrent un démarrage, pas un résultat définitif.',
    ],
    testimonial: {
      quote:
        'Ce qui rend son accompagnement vraiment précieux, c’est sa double casquette de psychologue et de webdesigner — une combinaison rare qui change tout. Il apporte une écoute sensible et une vraie compréhension des besoins, en plus d’une expertise technique solide.',
      author: 'Bénédicte Donet, psychologue',
    },
  },
  {
    slug: 'isabelle-leboeuf-joie-compassion',
    person: 'Isabelle Leboeuf',
    siteName: 'Joie & Compassion',
    profession: 'Psychologue',
    location: 'Seclin',
    externalUrl: 'https://joiecompassion.com/',
    image: isabelleImage,
    imageAlt: 'Page d’accueil de Joie & Compassion, le site d’Isabelle Leboeuf',
    title: 'Faire évoluer un ancien WordPress pour mieux diffuser le programme MOOD',
    summary:
      'Isabelle disposait d’un site WordPress construit avec un thème vieillissant. Peu visible dans les moteurs de recherche, il ne lui permettait pas de présenter et de diffuser son programme MOOD comme elle le souhaitait.',
    challenge:
      'Joie & Compassion s’adresse à deux publics : des personnes qui cherchent des ressources psychologiques et des professionnels intéressés par la thérapie fondée sur la compassion. Le site devait rendre ces parcours lisibles tout en donnant une vraie place au programme MOOD et aux formations.',
    objectives: [
      'Moderniser un site WordPress devenu visuellement et techniquement daté.',
      'Clarifier les parcours des particuliers et des professionnels.',
      'Rendre le programme MOOD plus visible et plus facile d’accès.',
      'Valoriser les articles, ateliers et formations existants.',
      'Organiser les pages et les textes pour qu’ils puissent être mieux compris par Google.',
    ],
    work: [
      'Refonte de l’identité visuelle et de la navigation.',
      'Réorganisation des contenus autour de la compassion, des ressources et des formations.',
      'Mise en avant du programme MOOD dans le parcours du site.',
      'Conservation et mise en valeur des nombreux articles déjà publiés.',
      'Amélioration de la technique, des textes et de leur présentation dans le site WordPress.',
    ],
    resultsIntro:
      'Entre avril et juillet, le site a été affiché plus de 6 000 fois dans Google et 271 personnes l’ont visité depuis les résultats de recherche. Cela montre que ses contenus sont trouvés. Pour savoir si cette visibilité aide réellement à diffuser MOOD, il faudra ensuite compter les visites de la page du programme et les inscriptions.',
    metrics: [
      { value: '6 281', label: 'affichages dans Google' },
      { value: '271', label: 'visites reçues depuis Google' },
      {
        value: '2,7–4,9 %',
        label: 'des affichages ont conduit à une visite selon les mois',
      },
      {
        value: '7e–11e',
        label: 'place moyenne du site dans les résultats selon les mois',
      },
    ],
    dataPeriod: 'Avril à juillet 2026',
    dataSource: 'Chiffres fournis directement par Google et consultés dans Ahrefs',
    interpretation: [
      'Les internautes trouvent le site en recherchant le nom d’Isabelle, mais aussi des informations sur la compassion, l’autocompassion et la formation.',
      'Plusieurs articles publiés avant la refonte continuent d’attirer des visiteurs depuis Google.',
      'Le nom « MOOD » n’apparaît pas encore suffisamment dans les recherches observées. Il faudra compter les visites de la page de vente et les inscriptions pour mesurer la diffusion du programme.',
    ],
    testimonial: {
      quote: 'Merci à Nicolas pour son aide pour mon site.',
      author: 'Isabelle Leboeuf, psychologue',
    },
  },
  {
    slug: 'pierre-dalarun',
    person: 'Pierre Dalarun',
    siteName: 'Pierre Dalarun',
    profession: 'Psychothérapeute',
    location: 'Soudan, près de Châteaubriant',
    externalUrl: 'https://pierredalarun.com/',
    image: pierreImage,
    imageAlt: 'Page d’accueil du site de Pierre Dalarun, psychothérapeute à Soudan',
    title: 'Remplacer un site Wix peu visible par une présence en ligne structurée',
    summary:
      'Pierre possédait déjà un site réalisé avec Wix, mais celui-ci était très peu visible. La nouvelle version devait expliquer clairement son approche psychocorporelle et poser les bases de sa visibilité locale.',
    challenge:
      'Avoir un site ne suffit pas si Google ne comprend pas clairement l’activité, les services proposés et le lieu d’exercice. Il fallait présenter les différentes pratiques, les consultations au cabinet et la possibilité de consulter en visio dans un ensemble facile à parcourir.',
    objectives: [
      'Clarifier le positionnement et l’approche psychocorporelle.',
      'Présenter les différentes pratiques avec des mots accessibles.',
      'Distinguer les consultations au cabinet et à distance.',
      'Organiser les pages pour aider Google à comprendre l’activité et la zone géographique.',
      'Donner une image professionnelle et rassurante dès la première visite.',
    ],
    work: [
      'Nouvelle organisation des pages et du parcours de lecture.',
      'Réécriture et hiérarchisation des contenus essentiels.',
      'Création d’une interface sobre adaptée au mobile.',
      'Mise en place de pages rapides, claires et compréhensibles par les moteurs de recherche.',
      'Observation des recherches effectuées autour de Soudan et Châteaubriant.',
    ],
    resultsIntro:
      'Dès le premier mois observé, Google a affiché le nouveau site 134 fois dans ses résultats et 28 personnes l’ont visité. Le site commence donc bien à être trouvé. Il faudra maintenant observer les mois suivants pour voir comment cette visibilité progresse.',
    metrics: [
      { value: '134', label: 'affichages dans Google' },
      { value: '28', label: 'visites reçues depuis Google' },
      { value: '1 sur 5', label: 'affichages ayant conduit à une visite' },
      {
        value: '11',
        label: 'expressions que nous surveillons dans Google',
      },
    ],
    dataPeriod: 'Août 2026',
    dataSource: 'Chiffres fournis directement par Google et consultés dans Ahrefs',
    interpretation: [
      'Ces premiers chiffres confirment que le nouveau site apparaît dans Google et reçoit déjà des visiteurs.',
      'Nous observons notamment les recherches de psychothérapeute et de psychomotricien autour de Soudan et Châteaubriant.',
      'Un seul mois ne permet pas encore de juger les résultats dans la durée : ces chiffres constituent un point de départ auquel nous pourrons comparer les prochains mois.',
    ],
  },
  {
    slug: 'laure-mesle-yaakoubi',
    person: 'Laure Meslé-Yaakoubi',
    siteName: 'Psychologue à Montpellier',
    profession: 'Psychologue clinicienne',
    location: 'Montpellier',
    externalUrl: 'https://montpellier-psychologue.pro/',
    image: laureImage,
    imageAlt: 'Page d’accueil du site de Laure Meslé-Yaakoubi, psychologue à Montpellier',
    title: 'Construire progressivement une visibilité locale dans une ville concurrentielle',
    summary:
      'Lorsque Laure s’est installée à Montpellier, de nombreux psychologues étaient déjà présents et visibles. Nous avons amélioré la présence du site dans Google au fil du temps, en faisant évoluer ses pages avec sa pratique.',
    challenge:
      'Le site doit présenter plusieurs publics et services — adultes, enfants, adolescents, couples, familles, bilans et accompagnement parental — tout en indiquant clairement à Google que Laure exerce à Montpellier. Dans une ville où de nombreux psychologues sont déjà présents, cette visibilité se construit par étapes.',
    objectives: [
      'Installer un positionnement local clair à Montpellier.',
      'Structurer le site selon les publics et les motifs de consultation.',
      'Créer des pages capables de répondre à des recherches précises.',
      'Faire évoluer les contenus avec la pratique et les besoins observés.',
      'Permettre aux internautes de trouver le site sans connaître à l’avance le nom de Laure.',
    ],
    work: [
      'Création de pages distinctes pour chaque besoin et chaque public à Montpellier.',
      'Rédaction et organisation des textes autour des prestations et des publics accompagnés.',
      'Création de pages dédiées à la parentalité, aux enfants, aux couples, aux bilans et à l’analyse des pratiques.',
      'Améliorations régulières des pages et des textes plutôt qu’une intervention unique.',
      'Refonte du site pour accompagner l’évolution de ses contenus et de son fonctionnement.',
    ],
    resultsIntro:
      'Les chiffres récents montrent que Google ne présente pas seulement la page d’accueil : plusieurs pages sont proposées lorsque les internautes recherchent un accompagnement parental, une thérapie de couple ou une analyse des pratiques à Montpellier. L’historique complet depuis l’installation pourra être ajouté plus tard.',
    metrics: [
      { value: '6 559', label: 'affichages dans Google' },
      { value: '300', label: 'visites reçues depuis Google' },
      {
        value: '2 047',
        label: 'affichages pendant le mois de juin',
        detail: 'mois le plus visible de la période',
      },
      {
        value: 'environ 6e',
        label: 'place moyenne sur « psychologue parentalité »',
      },
    ],
    dataPeriod: 'Février à juillet 2026',
    dataSource: 'Chiffres fournis directement par Google et consultés dans Ahrefs',
    interpretation: [
      'La page consacrée à l’analyse des pratiques apparaît en moyenne autour de la 8e place sur la recherche correspondante à Montpellier.',
      'Le site est également proposé pour des recherches concernant les enfants, les couples, les bilans et la parentalité.',
      'Sur la recherche très concurrentielle « psychologue Montpellier », le site apparaît en moyenne autour de la 20e place. Il reste donc une marge de progression.',
    ],
    testimonial: {
      quote:
        'Travail de très bonne qualité ! Très bon relationnel. Vous pouvez foncer en toute confiance !',
      author: 'Laure Meslé-Yaakoubi',
    },
  },
];

export const caseStudiesBySlug = new Map(caseStudies.map((study) => [study.slug, study]));
