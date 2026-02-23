# Site Personnel - Nicolas Devaux (Astro)

Site personnel moderne de Nicolas Devaux, développeur Web front-end, construit avec Astro.

## 🚀 Technologies utilisées

- **Astro** - Framework web moderne pour des sites ultra-rapides
- **Tailwind CSS** - Framework CSS utilitaire pour un design moderne
- **TypeScript** - Typage statique pour un code plus robuste
- **Netlify** - Déploiement et hébergement

## 🛠️ Développement local

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo>
cd nicodev-astro

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

### Commandes utiles

```bash
# Build de production
npm run build

# Preview du build de production
npm run preview

# Lancer les tests
npm run test
```

## 📁 Structure du projet

```
src/
├── components/     # Composants réutilisables
├── layouts/        # Layouts de pages
├── pages/          # Pages du site
├── styles/         # Styles globaux
└── utils/          # Utilitaires
public/
├── images/         # Images statiques
└── favicon.svg     # Favicon
```

## 🎨 Design System

Le site utilise Tailwind CSS avec une palette de couleurs personnalisée :

- **Primaire** : Bleu (#2563eb)
- **Secondaire** : Violet (#7c3aed)
- **Accent** : Vert (#059669)
- **Neutre** : Gris (#6b7280)

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🚀 Déploiement

### Netlify (Recommandé)

1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - Build command : `npm run build`
   - Publish directory : `dist`
3. Déployez !

### Variables d'environnement

Aucune variable d'environnement requise pour le moment.

## 📊 Performance

Le site est optimisé pour les performances avec :
- Génération statique (SSG)
- Images optimisées
- CSS et JS minifiés
- Cache des assets statiques
- Lazy loading des images

## 🔧 Configuration

### Astro

Configuration dans `astro.config.mjs` :
- Mode statique (SSG)
- Tailwind CSS intégré
- Optimisations de build

### Tailwind CSS

Configuration dans `tailwind.config.mjs` :
- Palette de couleurs personnalisée
- Typographie optimisée
- Composants personnalisés

## 📝 Licence

Ce projet est sous licence MIT.

