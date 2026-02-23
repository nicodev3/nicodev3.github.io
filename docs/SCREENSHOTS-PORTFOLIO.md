# Captures d'écran pour la page Portfolio

Ce document explique comment générer les screenshots des sites présentés dans la page portfolio, sans intervention de l'assistant.

## Prérequis

- Node.js installé
- Puppeteer présent dans le projet (`npm install` si besoin)

## Script utilisé

Le projet contient un script `scripts/screenshot-site.mjs` qui utilise Puppeteer pour capturer une page web.

## Commande

```bash
node scripts/screenshot-site.mjs <URL> [chemin_sortie]
```

- **URL** : l'adresse du site à capturer (ex. `https://psychologue-sorgues.com/`)
- **chemin_sortie** (optionnel) : chemin relatif ou absolu du fichier PNG. Par défaut : `public/images/screenshots/cecilecoaching.fr.png`

## Exemples

### Un seul site

```bash
node scripts/screenshot-site.mjs "https://psychologue-sorgues.com/" "public/images/screenshots/psychologue-sorgues.png"
```

### Convention de nommage

Les fichiers sont stockés dans `public/images/screenshots/`.  
Nom suggéré : `psychologue-<ville>.png` ou un nom basé sur le domaine (ex. `cecilecoaching.fr.png`).

## Ajouter une nouvelle entrée au portfolio

1. **Créer le screenshot** :
   ```bash
   node scripts/screenshot-site.mjs "https://exemple-site.fr/" "public/images/screenshots/exemple-site.png"
   ```

2. **Mettre à jour `src/pages/portfolio.astro`** : ajouter un objet dans le tableau `psychologueProjects` :
   ```js
   {
     title: "Nom du professionnel",
     description: "Site vitrine pour psychologue",
     image: "/images/screenshots/exemple-site.png",
     url: "https://exemple-site.fr/",
     location: "Ville"
   },
   ```

## Paramètres de capture

Le script utilise :
- **Viewport** : 1280 × 800 px
- **Format** : PNG
- **Zone** : zone visible uniquement (pas de capture full-page)

Pour modifier ces paramètres, éditer `scripts/screenshot-site.mjs`.

## Dépannage

- **Timeout** : si le site charge lentement, augmenter le `timeout` dans le script (actuellement 30000 ms).
- **Sandbox** : sur certains environnements, ajouter `--no-sandbox` et `--disable-setuid-sandbox` dans les arguments de Puppeteer (déjà présents).
- **Site injoignable** : vérifier que l’URL est correcte et que le site est en ligne.
