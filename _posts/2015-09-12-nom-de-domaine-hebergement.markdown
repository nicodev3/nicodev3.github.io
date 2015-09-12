---
layout: post
title: Choisir son nom de domaine et son hébergeur
date: 2015-09-12
categories: site internet, hébergement
comments: true
published: true
excerpt: Dans ce tutoriel, vous apprendrez comment mettre en place rapidement un site ou un blog avec le générateur de sites statiques Jekyll et l'héberger gratuitement sur Github.
---
# Hébergement et nom de domaine

## Quelles différences, comment choisir

Mes clients, très souvent psychologues, et néophytes dans le monde informatique, me demandent souvent quelles différences il y a entre **nom de domaine** et **hébergement**.

**Comment choisir mon nom de domaine**, **quel hébergeur choisir**, il n'est pas facile de se repérer sans avoir compris à minima le fonctionnement d'Internet.

Voici quelques éléments pour comprendre et faire au mieux votre choix.

{::options parse_block_html="true" /}
{: .plan-article}
<div>
#### Plan de l'article
- [Le nom de domaine](#ndd)
    - [C'est quoi un nom de domaine](#ckoi)
    - [Quel nom de domaine choisir](#kelnom)
- [L'hébergement](#heberg)
    - [Pourquoi un hébergeur](#pkoihebergeur)
    - [Quel type d\'hébergement choisir](#kelhebergement)
    - [Quel hébergeur choisir](#kelhebergeurchoisir)

</div>

### Le nom de domaine
{: #ndd}

#### C'est quoi un nom de domaine ?
{: #ckoi}

Permettez moi une analogie. Vous habitez certainement dans une maison ou un appartement. Afin de vous joindre, par courrier ou par téléphone, vous disposez d'une adresse et d'un numéro de téléphone, qui sont bien entendu uniques.

Le nom de domaine est l'adresse qui permet de joindre votre site Internet, comme votre adresse postale ou votre numéro de téléphone permettent de vous joindre chez vous.

En réalité les choses sont un peu plus complexes. Retenez simplement que l'adresse d'un site telle que nous la connaissons est la traduction d'une **adresse IP**, qui est une suite de chiffres impossible à mémoriser.


<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 80 65" enable-background="new 0 0 80 80" xml:space="preserve">
  <rect x="39" y="51" fill="#000000" width="2" height="10"/>
  <rect x="11" y="60" fill="#000000" width="58" height="2"/>
  <path fill="#000000" d="M50.56 52H29.51C27.02 52 25 49.98 25 47.49V30h2v17.49C27 48.88 28.12 50 29.51 50H50.56c1.38 0 2.51-1.12 2.51-2.51V30h2v17.49C55.07 49.98 53.04 52 50.56 52z"/>
  <polygon fill="#000000" points="59.38 35.78 40 20.28 20.63 35.78 19.38 34.22 40 17.72 60.63 34.22 "/>
  <polygon fill="#000000" points="45 51 43 51 43 39 37 39 37 51 35 51 35 37 45 37 "/>
</svg>
{: .svg-article}


{: .ndd-article}
91.198.174.192

#### Quel nom de domaine choisir ?

Sachez avant tout qu'il importe peu que vous choisissiez un nom de domaine en `.com` ou `.fr`. Il existe en réalité des centaines d'extensions possibles, et il en sort tous les jours ! D'une façon générale, je recommande le `.fr` dans la mesure ou il est réservé aux entreprises résidant en France. Pourquoi s'en priver..

En ce qui concerne le nom proprement dit, il est conseillé pour des questions de `SEO`[^1] de choisir un nom de domaine avec des termes sémantiquement corrects.

Par exemple, si vous êtes psychologue à Saint-Malo, il serait plus judicieux de choisir `psychologue-saint-malo.fr` que `nicolasdevaux.fr`.

[^1]: SEO signifie Search Engine Optimization, il s'agit simplement du référencement naturel de votre site dans les moteurs de recherche, Google, Bing et les autres...

#### Ou acheter son nom de domaine ?
{: #kelnom}

Il existe de très nombreux bureaux d'enregistrement de nom de domaine. Ces *registrars* ou *registraires* en français sont des revendeurs de noms de domaine. Les plus connus sont [gandi](https://www.gandi.net/?lang=fr), ou encore [OVH](https://www.ovh.com/fr/). Je recommande toutefois d'acheter le nom de domaine chez l'hébergeur ou vous aller déposer le code de votre site.

{: .caddie}
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve"><path d="M77.6 31.96L24.88 23.74l-1.78-4.43c-0.12-0.31-0.39-0.55-0.71-0.64l-9.53-2.69c-0.57-0.16-1.17 0.17-1.33 0.75 -0.16 0.57 0.17 1.17 0.75 1.33l9.02 2.55 1.79 4.47c0 0.01 0.01 0.03 0.01 0.04l10.86 27.06c-2.45 2.12-3.61 4.32-3.42 6.55 0.32 3.74 4.34 5.96 4.51 6.05 0.16 0.09 0.34 0.13 0.52 0.13h38.32c0.6 0 1.08-0.48 1.08-1.08s-0.48-1.08-1.08-1.08H35.86c-0.72-0.45-2.98-2.04-3.16-4.21 -0.13-1.58 0.88-3.26 2.98-4.98l39.29-2.01c0.52-0.03 0.94-0.41 1.01-0.92l2.54-17.44C78.59 32.6 78.18 32.05 77.6 31.96zM74.26 47.35l-3.11-7.75h4.24L74.26 47.35zM65.3 49.88L61.17 39.6h7.65l3.97 9.89L65.3 49.88zM55.52 50.38l-4.33-10.78h7.65l4.17 10.39L55.52 50.38zM45.74 50.88l-4.53-11.28h7.65l4.37 10.89L45.74 50.88zM35.97 51.38l-4.73-11.78h7.65l4.57 11.39L35.97 51.38zM44.61 29l3.39 8.44h-7.65l-3.9-9.71L44.61 29zM55.25 30.66l2.72 6.78h-7.65l-3.23-8.05L55.25 30.66zM65.9 32.32l2.05 5.12h-7.65l-2.56-6.39L65.9 32.32zM75.7 37.44h-5.42l-1.9-4.73 7.83 1.22L75.7 37.44zM33.97 27.34l4.05 10.09H30.37l-4.56-11.37L33.97 27.34z"/><path d="M67.39 65.14c-2.46 0-4.46 2-4.46 4.46 0 2.46 2 4.46 4.46 4.46 2.46 0 4.46-2 4.46-4.46C71.85 67.14 69.85 65.14 67.39 65.14zM67.39 71.9c-1.27 0-2.3-1.03-2.3-2.3 0-1.27 1.03-2.3 2.3-2.3 1.27 0 2.3 1.03 2.3 2.3C69.69 70.87 68.66 71.9 67.39 71.9z"/><path d="M34.64 65.14c-2.46 0-4.46 2-4.46 4.46 0 2.46 2 4.46 4.46 4.46 2.46 0 4.46-2 4.46-4.46C39.1 67.14 37.1 65.14 34.64 65.14zM34.64 71.9c-1.27 0-2.3-1.03-2.3-2.3 0-1.27 1.03-2.3 2.3-2.3 1.27 0 2.3 1.03 2.3 2.3C36.94 70.87 35.91 71.9 34.64 71.9z"/></svg>

Pour mes clients, je fais souvent appel à [Planet Hoster](https://www.planethoster.net/fr/), qui est un excellent hébergeur.

### L'hébergement
{: #heberg}

Nous avons vu que le nom de domaine correspond à l'adresse de votre site. Pour reprendre la métaphore de la maison, si vous possédez une adresse sans maison, c'est plutôt ennuyeux..

#### Pourquoi un hébergeur ?
{: #pkoihebergeur}

Un site internet, ce n'est pas un simple assemblage d'images et de texte, comme on l'imagine parfois. Ce qui produit les lignes que vous êtes entrain de lire, c'est du code `HTML`[^2]. Les animations sont faites avec du code `javaScript` et l'agencement visuel de la page par du code `CSS`[^3].

[^2]: Hyper Text Markup Langage : c'est un langage fait de balises de marquage structurées lisible par les navigateurs Internet.
[^3]: Cascading Style Sheets : les feuilles de style en cascade permettent de rendre l'aspect visuel au pages HTML. 

De plus, afin de vous permettre de commenter cet article, un langage spécifique est utilisé, le `PHP`.

Si vous êtes curieux(se), vous pouvez voir ce code en effectuant un clic droit de souris, puis, afficher le code source de la page. 

![code source](http://d.pr/i/AP8j+)
{: #tuto-gif}

Inutile de retenir tout cela. Ce que vous devez savoir c'est que ce code doit exister sur un ordinateur disant, le serveur, qui réside chez l'hébergeur.

#### Quel type d'hébergement choisir ?
{: #kelhebergement}

Il existe plusieurs formules d'hébergement pour un site Web. Pour faire simple, l'hébergement mutualisé est la meilleure solution pour des sites Web dits *vitrine*. Si vous n'envisagez pas un site complexe ou visité par des millions d'internautes par jour, cette solution est amplement suffisante et la moins onéreuse.

#### Quel hébergeur choisir ?
{: #kelhebergeurchoisir}

La encore, il y a pléthore d'hébergeurs sur le marché. Le choix vous appartient ! Néanmoins je recommande un hébergeur avec un service d'infogérance compris dans son offre, afin de ne pas avoir de mauvaise surprise en cas de panne. La sécurité de votre site est également un élément à ne pas négliger.





