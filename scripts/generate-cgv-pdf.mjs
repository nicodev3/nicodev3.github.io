#!/usr/bin/env node
/**
 * Génère public/cgv.pdf à partir du contenu des CGV.
 * Usage: node scripts/generate-cgv-pdf.mjs
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'cgv.pdf');
const email = 'contact.nicodev@gmail.com';
const siteUrl = 'https://nicodev.fr';

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Conditions Générales de Vente — Nicolas Devaux (Nicodev)</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 16mm 20mm;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #1a1a1a;
      font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
    }
    header {
      border-bottom: 1.5pt solid #1a1a1a;
      padding-bottom: 10pt;
      margin-bottom: 16pt;
    }
    .brand {
      font-size: 11pt;
      font-weight: 700;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    h1 {
      margin: 6pt 0 4pt;
      font-size: 18pt;
      line-height: 1.2;
    }
    .meta {
      margin: 0;
      color: #444;
      font-size: 9.5pt;
    }
    h2 {
      margin: 14pt 0 6pt;
      font-size: 11.5pt;
      page-break-after: avoid;
    }
    p, li {
      margin: 0 0 7pt;
      orphans: 3;
      widows: 3;
    }
    ul {
      margin: 0 0 8pt;
      padding-left: 16pt;
    }
    li { margin-bottom: 5pt; }
    strong { font-weight: 650; }
    a { color: #1a1a1a; text-decoration: underline; }
    footer {
      margin-top: 18pt;
      padding-top: 8pt;
      border-top: 0.75pt solid #999;
      color: #555;
      font-size: 8.5pt;
    }
  </style>
</head>
<body>
  <header>
    <div class="brand">Nicolas Devaux — Nicodev</div>
    <h1>Conditions Générales de Vente</h1>
    <p class="meta">Dernière mise à jour : 1er septembre 2026 · ${siteUrl}/cgv/</p>
  </header>

  <h2>Article 1 – Objet et champ d'application</h2>
  <p>
    Les présentes Conditions Générales de Vente (CGV) régissent les prestations de création et de maintenance de sites internet proposées par Nicolas Devaux à ses clients. Toute commande ou souscription implique l'acceptation sans réserve des présentes conditions.
  </p>

  <h2>Article 2 – Identification du prestataire</h2>
  <p>
    Les prestations sont assurées par <strong>Nicolas Devaux — Entrepreneur individuel (EI)</strong><br />
    SIRET : 751 032 699 00033<br />
    Activité : développement web, création de sites internet<br />
    Email : ${email}
  </p>

  <h2>Article 3 – Description des prestations</h2>
  <p>Le prestataire propose deux formules d'abonnement mensuel (détails et périmètre à jour sur la page Tarifs du site) :</p>
  <ul>
    <li>
      <strong>Offre « Sérénité » (29 € TTC / mois)</strong> : site professionnel, interface d'administration (CMS), bases SEO, fiche Google, veille de visibilité (détection et correction des problèmes), accompagnement à la rédaction initiale, hébergement et nom de domaine gérés, sécurité et sauvegardes, une modification simple de contenu par mois dans les conditions précisées sur le site.
    </li>
    <li>
      <strong>Offre « Visibilité &amp; Confiance » (49 € TTC / mois)</strong> : inclut les éléments de l'offre Sérénité, avec un support prioritaire, un SEO expert (outils de suivi supplémentaires), une aide à la rédaction (relecture, reformulation, suggestions de contenus), trois modifications simples par mois et une modernisation annuelle, telles que décrites sur le site.
    </li>
  </ul>
  <p>Les prestations hors périmètre décrit (refonte structurelle majeure, création de fonctionnalités sur mesure non prévues au brief, etc.) font l'objet d'un devis séparé ou d'une facturation au temps passé dans les conditions de l'article 6.</p>

  <h2>Article 4 – Tarifs et modalités de paiement</h2>
  <p>
    Les tarifs en vigueur sont ceux affichés sur le site au jour de la souscription : <strong>29 € TTC / mois</strong> pour l'offre Sérénité et <strong>49 € TTC / mois</strong> pour l'offre Visibilité &amp; Confiance. Tous les montants sont exprimés TTC.
  </p>
  <p>
    La création et la mise en ligne initiale du site sont <strong>incluses dans l'abonnement</strong>. Sauf convention écrite contraire, la facturation de l'abonnement prend effet après la livraison du site conformément aux modalités communiquées lors de la souscription (aucun frais d'installation distinct de ces formules n'est facturé dans le cadre standard décrit sur le site).
  </p>
  <p>
    L'abonnement est facturé mensuellement. Les prestations complémentaires ou les dépassements de périmètre sont facturés sur la base de <strong>50 € TTC / heure</strong> ou sur devis accepté par le client.
  </p>

  <h2>Article 5 – Délais et livraison</h2>
  <p>
    Le délai indicatif de mise en ligne est en général de <strong>deux à trois semaines</strong> à compter de la validation du brief et de la réception des contenus nécessaires ; ce délai peut être plus court lorsque les éléments sont fournis rapidement. Le livrable consiste en un site en ligne, fonctionnel et accessible. Des retards indépendants de la volonté du prestataire (force majeure, retard du client dans la fourniture des éléments) ne donnent pas lieu à pénalités.
  </p>

  <h2>Article 6 – Corrections initiales et modifications dans le temps</h2>
  <p>
    La livraison inclut un cycle de corrections (aller-retour) portant sur les ajustements de textes, sections et style prévus dans le brief initial. Toute demande nettement hors de ce cadre ou ultérieure hors du périmètre des offres est facturée dans les conditions de l'article 4.
  </p>
  <p>
    Les modifications de contenu incluses dans les abonnements sont celles décrites sur le site pour chaque formule (ex. textes, coordonnées, tarifs, photo, widget de rendez-vous pour l'offre concernée). Les changements de structure lourds (nouvelles pages majeures, refonte complète du design) restent hors périmètre sauf devis accepté.
  </p>

  <h2>Article 7 – Durée et résiliation</h2>
  <p>
    Les abonnements sont <strong>sans engagement de durée</strong>. Le client peut résilier à tout moment en adressant une demande au prestataire (par email aux coordonnées indiquées à l'article 2). La résiliation prend effet à l'expiration de la <strong>période mensuelle déjà facturée</strong>, sans pénalité ni frais réservés au titre de la seule résiliation. Les services associés (hébergement, maintenance, support) cessent à cette échéance selon les modalités précisées lors de la relation contractuelle.
  </p>
  <p>
    Le nom de domaine associé à l'abonnement est acheté et géré par le prestataire pendant la durée du service. <strong>En cas de résiliation, le client peut demander le transfert du nom de domaine à son nom ou vers le prestataire de son choix</strong> : le prestataire réalise les opérations nécessaires (déverrouillage, code de transfert, autorisation) dans la limite des règles du registre concerné et des délais techniques applicables, sans frais de sortie facturés par le prestataire. Les éventuels coûts du registre ou du nouveau bureau d'enregistrement restent à la charge du client.
  </p>
  <p>
    Sur simple demande, le prestataire remet également au client, sans frais de sortie, <strong>une copie exploitable du site dans son état à la date de fin de l'abonnement</strong>, comprenant les fichiers, contenus et médias nécessaires à son réhébergement auprès d'un autre prestataire. Cette remise n'inclut pas les comptes, secrets techniques ou licences de tiers non transférables du prestataire. L'installation chez un nouvel hébergeur et les adaptations demandées au-delà de la remise de cette copie peuvent faire l'objet d'un devis distinct.
  </p>

  <h2>Article 8 – Propriété intellectuelle</h2>
  <p>
    Les droits sur le site livré (contenus fournis par le client, structure et design spécifiques au projet) sont cédés au client à la livraison dans la mesure nécessaire à son exploitation, sa modification et son réhébergement pour l'activité du client. Le prestataire conserve les droits sur les éléments génériques (code réutilisable, briques techniques, frameworks) et les licences de tiers, tout en accordant au client les droits d'utilisation nécessaires au fonctionnement de la copie exploitable remise dans les conditions de l'article 7, sauf restriction imposée par une licence tierce clairement signalée.
  </p>

  <h2>Article 9 – Hébergement et nom de domaine</h2>
  <p>
    L'hébergement du site est assuré via <strong>Cloudflare</strong> (réseau de diffusion et hébergement adapté aux sites statiques ou équivalent selon la configuration en vigueur). Pour les abonnements incluant le nom de domaine, celui-ci est enregistré et géré par le prestataire pendant la durée de l'abonnement. À la fin de la relation contractuelle, le nom de domaine est transférable au client sur simple demande, dans les conditions prévues à l'article 7.
  </p>

  <h2>Article 10 – Données personnelles et cookies</h2>
  <p>
    Le prestataire, <strong>Nicolas Devaux</strong> (${email}), agit en qualité de responsable de traitement au sens du Règlement (UE) 2016/679 (RGPD) pour les données collectées dans le cadre du site vitrine et des échanges commerciaux.
  </p>
  <p>
    <strong>Données traitées dans le cadre des prestations pour les clients :</strong> nom, prénom, adresse électronique, numéro de téléphone le cas échéant, informations relatives au projet et aux contenus — dans la mesure nécessaire à l'exécution du contrat et à la facturation.
  </p>
  <p>
    <strong>Finalités :</strong> gestion de la relation contractuelle, réalisation des prestations, facturation, obligations légales.
  </p>
  <p>
    <strong>Durée de conservation :</strong> pendant la durée de la relation puis selon les durées précisées dans la politique de confidentialité (données contractuelles et comptables : obligations légales, typiquement conservation des pièces justificatives pendant la durée requise).
  </p>
  <p>
    <strong>Destinataires et sous-traitants :</strong> les données peuvent être confiées à des prestataires techniques strictement nécessaires (notamment hébergement via Cloudflare, mesure d'audience via une instance <strong>Umami</strong> auto-hébergée lorsque celle-ci est activée, dans les conditions décrites dans la politique de confidentialité). Il n'est pas fait usage de <strong>Google Analytics</strong> dans la configuration actuelle décrite sur le site.
  </p>
  <p>
    <strong>Cookies et traceurs :</strong> le site ne dépose pas de cookies publicitaires. La mesure d'audience mise en œuvre via Umami vise des statistiques agrégées conformément à la politique de confidentialité et cookies, sans bandeau de consentement cookies dans la mesure où aucun traceur soumis au régime du consentement préalable n'est utilisé pour la configuration décrite sur cette politique.
  </p>
  <p>
    <strong>Droits des personnes :</strong> droits d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition — à exercer via ${email}. Réclamation possible auprès de la CNIL (https://www.cnil.fr/fr).
  </p>

  <h2>Article 11 – Responsabilité</h2>
  <p>
    La responsabilité du prestataire est limitée au montant des sommes effectivement versées par le client pour la prestation en cause sur les douze derniers mois. Le prestataire ne saurait être tenu responsable des dommages indirects. En cas de force majeure, les obligations sont suspendues.
  </p>

  <h2>Article 12 – Droit applicable et litiges</h2>
  <p>
    Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents. Une tentative de médiation pourra être proposée avant toute action judiciaire.
  </p>

  <h2>Article 13 – Acceptation</h2>
  <p>
    L'acceptation des présentes CGV résulte de la commande ou de la souscription à l'une des formules proposées. Elles prévalent sur tout document du client à caractère contradictoire.
  </p>

  <footer>
    Document généré pour Nicolas Devaux (Nicodev) — Version en ligne : ${siteUrl}/cgv/
  </footer>
</body>
</html>`;

async function main() {
	await mkdir(dirname(outputPath), { recursive: true });

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});

	try {
		const page = await browser.newPage();
		await page.setContent(html, { waitUntil: 'networkidle0' });
		await page.pdf({
			path: outputPath,
			format: 'A4',
			printBackground: true,
			margin: { top: '18mm', right: '16mm', bottom: '20mm', left: '16mm' },
			displayHeaderFooter: true,
			headerTemplate: '<div></div>',
			footerTemplate: `
        <div style="width:100%;font-size:8pt;color:#666;padding:0 16mm;display:flex;justify-content:space-between;">
          <span>CGV — Nicolas Devaux (Nicodev)</span>
          <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
        </div>
      `,
		});
		console.log(`PDF généré : ${outputPath}`);
	} finally {
		await browser.close();
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
