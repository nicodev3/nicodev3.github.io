export type BlogInlineCtaVariant =
  | 'site'
  | 'visibility'
  | 'refonte'
  | 'budget'
  | 'independence'
  | 'psychomotricien';

export interface BlogInlineCtaConfig {
  beforeHeading: string;
  variant: BlogInlineCtaVariant;
}

/**
 * Emplacements éditoriaux des CTA intégrés aux articles.
 *
 * Le CTA est inséré juste avant le H2 indiqué, donc après que le lecteur a
 * compris le problème et avant la partie décisionnelle ou opérationnelle.
 */
export const BLOG_INLINE_CTAS: Record<string, BlogInlineCtaConfig> = {
  'avis-google-e-reputation-psychologue': {
    beforeHeading: 'Construire la confiance autrement',
    variant: 'visibility',
  },
  'combien-coute-site-internet-2026': {
    beforeHeading: 'Comment décider de votre budget',
    variant: 'budget',
  },
  'comment-trouver-premiers-patients-psychologue': {
    beforeHeading: 'Une stratégie simple et régulière vaut mieux qu’une présence dispersée',
    variant: 'visibility',
  },
  'creation-site-internet': {
    beforeHeading: 'En résumé',
    variant: 'site',
  },
  'creer-site-avec-ia-psychologue': {
    beforeHeading: 'Pourquoi faire appel à un accompagnement — et pourquoi Nicodev',
    variant: 'site',
  },
  'faire-son-site-soi-meme-psychologue': {
    beforeHeading: 'Quand il vaut mieux être accompagné',
    variant: 'site',
  },
  'google-business-profile-psychologue': {
    beforeHeading: 'Ce qui influence la visibilité locale',
    variant: 'visibility',
  },
  'google-business-profile-psychomotricien': {
    beforeHeading: 'Suivre sans s’obséder',
    variant: 'psychomotricien',
  },
  'nom-de-domaine-hebergement': {
    beforeHeading: 'Conclusion',
    variant: 'site',
  },
  'pourquoi-services-web-exclusifs-psychologues': {
    beforeHeading: 'Ma double posture de psychologue et développeur web : un atout déterminant',
    variant: 'site',
  },
  'psychologue-instagram-site-internet': {
    beforeHeading: 'Instagram et site internet : la combinaison la plus efficace',
    variant: 'independence',
  },
  'psychologue-premier-google-ville': {
    beforeHeading: 'Plan d’action SEO local sur 30 jours',
    variant: 'visibility',
  },
  'referencement-local-psychomotricien': {
    beforeHeading: 'Une stratégie sobre',
    variant: 'psychomotricien',
  },
  'refonte-site-internet': {
    beforeHeading: 'Méthode simple pour lancer une refonte sans se disperser',
    variant: 'refonte',
  },
  'salaire-psychologue-liberal': {
    beforeHeading: 'Comment augmenter son revenu sans « sur-vendre » sa pratique',
    variant: 'site',
  },
	'visibilite-installation-psychologue-liberal': {
		beforeHeading: 'Une stratégie simple de visibilité',
		variant: 'site',
	},
	'preparer-installation-psychologue-liberal': {
		beforeHeading: 'Étudier ton marché local sans entrer dans une logique commerciale agressive',
		variant: 'visibility',
	},
	'demarches-administratives-psychologue-liberal': {
		beforeHeading: 'Les erreurs fréquentes à éviter',
		variant: 'site',
	},
	'statut-juridique-psychologue-liberal': {
		beforeHeading: 'Se faire accompagner quand le choix n’est pas évident',
		variant: 'budget',
	},
	'fiscalite-tva-charges-psychologue-liberal': {
		beforeHeading: 'Le seuil de viabilité : combien de séances faut-il vraiment ?',
		variant: 'site',
	},
	'ouvrir-cabinet-psychologue-local': {
		beforeHeading: 'Les consultations en ligne : une vraie modalité d’exercice, avec un cadre',
		variant: 'independence',
	},
	'cadre-premiers-patients-psychologue-liberal': {
		beforeHeading: 'Le RGPD au cabinet',
		variant: 'site',
	},
	'installer-liberal-psychologue-par-ou-commencer': {
		beforeHeading: 'Plan d’action sur 30 jours',
		variant: 'site',
	},
  'guide-complet-visibilite-en-ligne-psychologues': {
    beforeHeading: 'Par où commencer selon votre situation',
    variant: 'site',
  },
  'site-psychologue-confrere-vs-agence-multi-metiers': {
    beforeHeading: 'Ce que vous gagnez concrètement',
    variant: 'site',
  },
  'site-internet-psychologue-doctolib': {
    beforeHeading: 'Quand choisir Doctolib, un site, ou les deux ?',
    variant: 'independence',
  },
  'site-internet-psychologue-promesses-trop-belles': {
    beforeHeading: 'Une approche plus simple et plus adaptée',
    variant: 'site',
  },
  'site-internet-psychologues': {
    beforeHeading: 'Erreurs fréquentes à éviter',
    variant: 'site',
  },
  'site-internet-psychomotricien': {
    beforeHeading: 'Pour aller plus loin',
    variant: 'psychomotricien',
  },
};
