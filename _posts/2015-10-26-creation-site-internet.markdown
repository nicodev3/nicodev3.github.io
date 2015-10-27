---
layout: post
title: Création d'un site Internet
date: 2015-10-26
categories: "site internet, création"
comments: true
published: true
excerpt: "Dans cet article, je vous propose de découvrir se qui se cache derrière un site Internet."
---

# Un site Internet, c'est quoi ?

Pour la plupart d'entre nous, un site internet est un ensemble de textes et de visuels, animés ou non, parfois de sons, accessible depuis un ordinateur, un téléphone, une tablette et même paraît-il une montre.. 

Pourtant, un site internet est bien plus que cela. Pardonnez ma référence à Saint-Exupéry, mais je préfère sa métaphore à celle du capot de la voiture... L'essentiel d'un site internet, ce qui le structure, qui nous permet de le voir, mais aussi et surtout ce qui lui donne son sens, est invisible pour les yeux.. Ou presque ! 

> " l'essentiel est invisible pour les yeux " 

Je vous invite à un petit tour d'horizon du monde du développement. N'ayez crainte, je tenterai de vous tenir la main tout au long de ce parcours jonché de mots étranges et d'algorithmes effrayants !

Nous partirons de la surface pour aller vers les profondeurs. Mais je suis certain que mes amis psychologues en ont l'habitude...

{::options parse_block_html="true" /}
{: .plan-article}
<div>
#### Plan de l'article
- [Le navigateur : fenêtre sur le Web](#navigateur)
    - [Les différents navigateurs](#navigateurs)
    - [Un interprête pour le code](#interprete)
- [Du code à la page, les langages du Web](#langages)
    - [Pourquoi un hébergeur](#pkoihebergeur)
    - [Quel type d\'hébergement choisir](#kelhebergement)
    - [Quel hébergeur choisir](#kelhebergeurchoisir)

</div>

## Le navigateur : fenêtre sur le Web
{: #navigateur}

Voila un drôle de nom pour *surfer* sur le net. Pourtant, nous le verrons, Internet est plein de métaphores assez amusantes - bien que cet océan ne soit pas toujours de tout repos.

{: .blog-image} 
![navigateur](/images/navigateur.png)

### Les différents navigateurs
{: #navigateurs}

Le *navigateur*, c'est le logiciel que vous utilisez pour vous rendre sur Internet. `Internet Explorer` (on retrouve la métaphore de l'exploration !), `Mozilla Firefox`, `Google Chrome`, sont les principaux armateurs de cette flotte.

Ce fier capitaine vous entraîne sur la toile, c'est lui qui vous permet de voir les pages que vous consultez. Sans lui, tout cela ne serait qu'une succession de lignes de code difficilement compréhensibles (sauf pour les robots d'indexation, comme nous le verrons plus loin).

Notons au passage que les différents navigateurs n'affichent pas nécessairement le contenu des pages de la même façon, surtout pour les plus anciens d'entre eux. Il est donc important d'avoir un navigateur à jour pour bénéficier des dernières fonctionnalités d'Internet.

### Un interprête pour le Web
{: #interprete}

Ce que fait le navigateur, c'est qu'il traduit littéralement le **code** pour l'afficher sous forme lisible et immédiatement compréhensible à l'oeil humain.

> " le code est un langage interprété par le navigateur" 

Vous avez du remarquer un mot étrange.. Le **code**.. Qu'est-ce que cette chose ? Si j'étais Tintin, j'appellerais le Capitaine Hadock pour nous éclairer ! **Le code est le langage interprété par le navigateur**.

Mais c'est quoi ce code ? Ou se trouve-t-il ? C'est très simple, ou presque. Comme je l'ai déjà écrit dans l'article [hébergement et nom de domaine](http://nicodev3.github.io/2015/09/12/nom-de-domaine-hebergement/), le code est un langage sous forme de fichiers informatiques qui forme un ensemble de données lisibles par les ordinateurs. Ces deniers étant régis par le système binaire, ils ont besoin - les pauvres - de directives extrêmement stucturées pour faire leur travail. Le code - les fichiers contenant le code - est stocké sur un serveur, un ordinateur distant qui permet à chaque internaute de lancer son navigateur pour l'explorer intelligiblement.

Ainsi, HTML, CSS, PHP, Javascript (entre autres), sont les langages que comprend votre ordinateur et que votre navigateur interprête.

## Du code à la page : les langages du Web
{: #langages}

Le navigateur, votre interpête, a besoin d'un langage qu'il comprend afin de vous restituer visuellement les pages que vous souhaitez voir. Nous allons avancer pas à pas. Le premier langage permet au navigateur de vous restituer du contenu textuel, ce que vous lisez en ce moment-même ! Ce langage est le `HTML` (Hypertext Markup Language ou Langage de marquage de données en français).

### HTML : des balises pour stucturer le Web

Le langage HTML est relativement simple à comprendre et à apprendre. Il structure les données selon un code bien précis de balises. Dans la courte vidéo ci-dessous, vous pourrez voir un apperçu du fonctionnement du langage HTML.


{: .video-center}
<iframe src="https://player.vimeo.com/video/143750588?color=ff0179" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 

Comme vous avez pu vous en appercevoir si vous avez visionné la vidéo, le résultat est purement textuel, et ne comporte aucune mise en forme de positionnement des éléments ni de couleurs. Les éléments sont simplement empilés les uns au dessus des autres.

Si vous avez connu les débuts d'Internet, cela doit vous rappeler des souvenirs ! Pour ajouter une mise en forme au contenu HTML brut, nous avons besoin d'un autre langage : le CSS.

### CSS : mettre en forme le HTML

CSS (Cascading Style Sheet, ou feuille de styles en cascade) est un langage qui permet la mise en forme du contenu généré par le HTML. Si nous reprenons notre exemple de la courte vidéo ci-dessus, nous pouvons ajouter quelques changements visuels.

{: .video-center}
<iframe src="https://player.vimeo.com/video/143761075" width="600" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Les styles sont appliqués à chaque élément HTML, et permettent la mise en place de contenus visuellement attractifs. On peut ajouter des styles qui s'adaptent à toutes les tailles de navigateur, selon que l'internaute consulte le site de son ordinateur de bureau, d'un téléphone ou d'une tablette.

Ce travail de mise en forme prend du temps et il existe plus d'une centaine d'attributs possibles, chacun contenant plusieurs propriétés.. On imagine facilement le travail du web designer moderne et le temps pris à mettre en forme visuellement un site.

Ce n'est pas tout, il est également possible d'ajouter des animations sur un site internet. C'est possible avec le langage CSS, mais les animations sont surtout réalisées avec un langage encore plus complexe : le JavaScript.

### Javascript : donner vie au contenu

JavaScript. Le graal de tout développeur *front-end*[^1] tant il peut s'avérer complexe, mais également riche de fonctionnalités. Ce langage permet de manipuler les éléments HTML afin d'ajouter de l'interactivité aux pages Internet.

<p data-height="422" data-theme-id="5075" data-slug-hash="OyZVPe" data-default-tab="result" data-user="ndevaux" class='codepen'>See the Pen <a href='http://codepen.io/ndevaux/pen/OyZVPe/'>Le langage HTML</a> by DEVAUX (<a href='http://codepen.io/ndevaux'>@ndevaux</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


[^1]: le dévoloppeur dit *front-end* est celui qui développe la partie visible du site internet. Le développeur *back-end* développe la partie serveur, souvent à l'aide du langage PHP. C'est grâce au *back-end* que des systèmes comme WordPress sont possibles.




