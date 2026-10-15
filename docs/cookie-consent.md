# GA4 et consentement

Renseigner `PUBLIC_GA4_MEASUREMENT_ID=G-…` dans les variables de build Cloudflare Pages, puis reconstruire et déployer. Un identifiant absent ou invalide désactive cette intégration. L'identifiant est public.

Le composant `CookieConsent.astro` charge la bibliothèque sans bloquer le parsing HTML. Les fichiers de la dépendance npm sont copiés automatiquement au démarrage Astro dans `public/tarteaucitron/1.35.1/`, puis inclus dans `dist`. Ce chemin versionné permet le cache long sans CDN tiers. Ne pas modifier ces copies générées. Lors d'une mise à jour de la dépendance, mettre à jour les deux chemins versionnés dans le composant et la configuration Astro.

Les styles et la langue française sont chargés par la bibliothèque. Le mode `softConsentMode: true` bloque le chargement de Google avant acceptation. Le refus et le retrait sont pris en charge par tarteaucitron. Les choix expirent après 180 jours. Le bouton en bas à gauche permet de changer d'avis sans chevaucher WhatsApp.

## Vérification

Construire avec un identifiant de mesure, lancer `npm run preview -- --host 127.0.0.1`, puis exécuter `node scripts/check-consent.mjs`. Le script utilise Chrome local (ou `CHROME_PATH`) et intercepte les requêtes Google pour ne pas envoyer de visites de test. Il vérifie le bandeau, le refus persistant, l'acceptation, la configuration GA4, le retrait et les erreurs JS/HTTP.

Ce test valide l'intégration et le déclenchement de la balise. Vérifier ensuite la réception effective dans GA4 Temps réel après déploiement, avec consentement et sans bloqueur.

Les événements personnalisés existants dans `src/utils/analytics.ts` restent envoyés à Umami. Le test ne valide pas la conformité de l'ensemble des autres services du site.
