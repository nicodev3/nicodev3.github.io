# Site Personnel - Nicolas Devaux

Site personnel de Nicolas Devaux, développeur Web front-end.

## 🚀 Déploiement sur Netlify

Ce site est configuré pour être déployé sur Netlify avec Jekyll 4.x.

### Configuration Netlify

- **Build command**: `bundle exec jekyll build`
- **Publish directory**: `_site`
- **Ruby version**: 3.3.5 (configuré automatiquement par Netlify)

### Variables d'environnement Netlify

```bash
JEKYLL_ENV=production
```

## 🛠️ Développement local

### Prérequis

- Ruby 3.3.5 ou plus récent
- Bundler

### Installation

```bash
# Cloner le repository
git clone https://github.com/nicodev3/nicodev3.github.io.git
cd nicodev3.github.io

# Installer les dépendances
bundle install

# Lancer le serveur de développement
bundle exec jekyll serve
```

Le site sera accessible sur `http://localhost:4000`

### Commandes utiles

```bash
# Build de production
bundle exec jekyll build

# Build avec watch (rechargement automatique)
bundle exec jekyll serve --watch

# Build avec incremental (plus rapide)
bundle exec jekyll serve --incremental
```

## 📦 Plugins Jekyll

- **jekyll-seo-tag**: Optimisation SEO
- **jekyll-sitemap**: Génération de sitemap
- **jekyll-feed**: Flux RSS
- **jekyll-redirect-from**: Gestion des redirections
- **jekyll-relative-links**: Liens relatifs automatiques
- **jekyll-mentions**: Mentions GitHub
- **jekyll-gist**: Intégration des Gists GitHub
- **jekyll-github-metadata**: Métadonnées GitHub

## 🎨 Structure du projet

```
├── _config.yml          # Configuration Jekyll
├── _layouts/            # Layouts de pages
├── _includes/           # Partiels réutilisables
├── _posts/              # Articles de blog
├── _scss/               # Styles SCSS
├── js/                  # Scripts JavaScript
├── images/              # Images
├── netlify.toml         # Configuration Netlify
└── Gemfile              # Dépendances Ruby
```

## 🔧 Configuration

### Jekyll 4.x

Le site utilise Jekyll 4.4.1 avec les dernières fonctionnalités :
- Support complet de Sass
- Build plus rapide
- Meilleure gestion des assets
- Support des plugins modernes

### Performance

Le site est optimisé pour les performances avec :
- Cache des assets statiques
- Compression des images
- Headers de sécurité
- Optimisation SEO

## 📝 Licence

Ce projet est sous licence MIT.
