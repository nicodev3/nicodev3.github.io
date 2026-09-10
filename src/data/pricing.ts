/**
 * Modèle tarifaire Nicodev — source unique pour les pages, FAQ et données structurées.
 * Message clé : 0 € de construction, puis 29 € ou 49 € / mois.
 */
export const SETUP_FEE_AMOUNT = '0 €';
export const SETUP_FEE_LABEL = 'de construction du site';

export const SERENITE_MONTHLY = '29€';
export const VISIBILITE_MONTHLY = '49€';
export const SERENITE_MONTHLY_SPACED = '29 €';
export const VISIBILITE_MONTHLY_SPACED = '49 €';

/** Titre de section / promesse scannable */
export const PRICING_HEADLINE = '0 € de construction, puis 29 € ou 49 € par mois';

export const PRICING_LEAD =
	'Aucun coût de base pour créer le site. Vous ne recevez pas de facture de construction : uniquement 29 €/mois (Sérénité) ou 49 €/mois (Visibilité & Confiance), tout inclus.';

export const PRICING_FAQ = {
	id: 'faq-cout-construction',
	question: 'Y a-t-il un coût de base pour la construction du site ?',
	answer:
		'Non. 0 € de frais de création : vous ne recevez pas de facture pour construire le site. Vous payez uniquement 29 € ou 49 € par mois selon la formule, après la livraison. Hébergement, nom de domaine et maintenance sont inclus.',
} as const;

export function compoundMonthlyPriceSpec(monthlyPrice: string) {
	return {
		'@type': 'CompoundPriceSpecification',
		priceComponent: [
			{
				'@type': 'UnitPriceSpecification',
				name: 'Construction du site',
				price: '0',
				priceCurrency: 'EUR',
			},
			{
				'@type': 'UnitPriceSpecification',
				name: 'Abonnement mensuel',
				price: monthlyPrice,
				priceCurrency: 'EUR',
				unitText: 'MONTH',
			},
		],
	};
}
