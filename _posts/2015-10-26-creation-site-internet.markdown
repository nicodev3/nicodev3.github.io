---
layout: post
title: Création d'un site Internet
description: Tout savoir ou presque sur la composition d'un site internet.
date: 2015-10-26
categories: "site internet, création"
h1: créer un site internet
description: Comment est conçu un site internet ? Comprendre la structure et le code d'un site. Par nicodev, création de sites internet.
comments: true
published: true
excerpt: "Dans cet article, je vous propose de découvrir se qui se cache derrière un site Internet."
---

Pour la plupart d'entre nous, un site internet est un ensemble de textes et de visuels, animés ou non, parfois de sons, accessible depuis un ordinateur, un téléphone, une tablette, et même paraît-il une montre.. 

Pourtant, un site internet est bien plus que cela. Pardonnez ma référence à Saint-Exupéry, mais je préfère sa métaphore à celle du capot de la voiture... L'essentiel d'un site internet, ce qui le structure, qui nous permet de le voir, mais aussi et surtout ce qui lui donne son sens, est invisible pour les yeux.. Ou presque ! 

> " l'essentiel est invisible pour les yeux " 

Je vous invite à un petit tour d'horizon du monde du développement. N'ayez crainte, je tenterai de vous tenir la main tout au long de ce parcours jonché de mots étranges et d'algorithmes effrayants !

Nous partirons de la surface pour aller vers les profondeurs. Mais je suis certain que mes amis psychologues en ont l'habitude...

{::options parse_block_html="true" /}
<div class="plan-article-fixed">
<div class="plan-article">
<p>Plan de l'article</p>
1. [Le navigateur : fenêtre sur le Web](#navigateur){: data-scroll=""}
    1. [Les différents navigateurs](#navigateurs){: data-scroll=""}
    2. [Un interprète pour le code](#interprete){: data-scroll=""}
2. [Du code à la page, les langages du Web](#langages){: data-scroll=""}
    1. [HTML: des balises pour structurer le Web](#html){: data-scroll=""}
    2. [CSS : mettre en forme le HTML](#css){: data-scroll=""}
    3. [Javascript : donner vie au contenu](#js){: data-scroll=""}
3. [Du contenu, du contenu, encore du contenu !](#contenu){: data-scroll=""}
	1. [Structurer les données](#structurer){: data-scroll=""}
	2. [l'UX, une donnée à ne pas négliger](#ux){: data-scroll=""}
	3. [L'accessibilité, une nécessité, un challenge](#accessibilité){: data-scroll=""}
4. [Conclusion](#conclusion){: data-scroll=""}
</div>
</div>

---
{: .hr-icon} 

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

### Un interprète pour le Web
{: #interprete}

Ce que fait le navigateur, c'est qu'il traduit littéralement le **code** pour l'afficher sous forme lisible et immédiatement compréhensible à l'oeil humain.

> " le code est un langage interprété par le navigateur" 

Vous avez du remarquer un mot étrange.. Le **code**.. Qu'est-ce que cette chose ? Si j'étais Tintin, j'appellerais le Capitaine Haddock pour nous éclairer ! **Le code est le langage interprété par le navigateur**.

Mais c'est quoi ce code ? Ou se trouve-t-il ? C'est très simple, ou presque. Comme je l'ai déjà écrit dans l'article [hébergement et nom de domaine](https://nicodev3.github.io/2015/09/12/nom-de-domaine-hebergement/), le code est un langage sous forme de fichiers informatiques qui forme un ensemble de données lisibles par les ordinateurs. Ces deniers étant régis par le système binaire, ils ont besoin - les pauvres - de directives extrêmement structurées pour faire leur travail. Le code - les fichiers contenant le code - est stocké sur un serveur, un ordinateur distant qui permet à chaque internaute de lancer son navigateur pour l'explorer intelligiblement.

Ainsi, HTML, CSS, PHP, Javascript (entre autres), sont les langages que comprend votre ordinateur et que votre navigateur interprète.

## Du code à la page : les langages du Web
{: #langages}

Le navigateur, votre interprète, a besoin d'un langage qu'il comprend afin de vous restituer visuellement les pages que vous souhaitez voir. Nous allons avancer pas à pas. Le premier langage permet au navigateur de vous restituer du contenu textuel, ce que vous lisez en ce moment-même ! Ce langage est le `HTML` (Hypertext Markup Language ou Langage de marquage de données en français).

### HTML : des balises pour structurer le Web
{: #navigateur}

Le langage HTML est relativement simple à comprendre et à apprendre. Il structure les données selon un code bien précis de balises. Dans la courte vidéo ci-dessous, vous pourrez voir un aperçu du fonctionnement du langage HTML.


{: .video-center}
<iframe src="https://player.vimeo.com/video/143750588?color=ff0179" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 

Comme vous avez pu vous en apercevoir si vous avez visionné la vidéo, le résultat est purement textuel, et ne comporte aucune mise en forme de positionnement des éléments ni de couleurs. Les éléments sont simplement empilés les uns au dessus des autres.

Si vous avez connu les débuts d'Internet, cela doit vous rappeler des souvenirs ! Pour ajouter une mise en forme au contenu HTML brut, nous avons besoin d'un autre langage : le CSS.

### CSS : mettre en forme le HTML
{: #css}

CSS (Cascading Style Sheet, ou feuille de styles en cascade) est un langage qui permet la mise en forme du contenu généré par le HTML. Si nous reprenons notre exemple de la courte vidéo ci-dessus, nous pouvons ajouter quelques changements visuels.

{: .video-center}
<iframe src="https://player.vimeo.com/video/143761075" width="600" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Les styles sont appliqués à chaque élément HTML, et permettent la mise en place de contenus visuellement attractifs. On peut ajouter des styles qui s'adaptent à toutes les tailles de navigateur, selon que l'internaute consulte le site de son ordinateur de bureau, d'un téléphone ou d'une tablette.

Ce travail de mise en forme prend du temps et il existe plus d'une centaine d'attributs possibles, chacun contenant plusieurs propriétés.. On imagine facilement le travail du web designer moderne et le temps pris à mettre en forme visuellement un site.

Ce n'est pas tout, il est également possible d'ajouter des animations sur un site internet. C'est possible avec le langage CSS, mais les animations sont surtout réalisées avec un langage encore plus complexe : le JavaScript.

### Javascript : donner vie au contenu
{: #js}

JavaScript. Le Graal de tout développeur *front-end*[^1] tant il peut s'avérer complexe, mais également riche de fonctionnalités. Ce langage permet de manipuler les éléments HTML afin d'ajouter de l'interactivité aux pages Internet. Sur la simple animation ci-dessous on peut voir la puissance de JavaScript.

<p data-height="422" data-theme-id="5075" data-slug-hash="OyZVPe" data-default-tab="result" data-user="ndevaux" class='codepen'>See the Pen <a href='http://codepen.io/ndevaux/pen/OyZVPe/'>Le langage HTML</a> by DEVAUX (<a href='http://codepen.io/ndevaux'>@ndevaux</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Maintenant que vous êtes plus familiers avec le code, vous pouvez cliquer sur les onglets de la démonstration ci-dessus pour voir le code `html`, `css` ou `JavaScript` que j'ai utilisé pour cet exemple. Vous pouvez même l'éditer si vous voulez vous amuser ! Bien entendu, la réalité est encore plus complexe, je ne vous ai présenté ici que des exemples très simples de ce que l'on peut faire avec ces langages.

### PHP : la part invisible du Web

Le langage PHP est un langage dit *serveur* qui sert à manipuler, générer, stocker du langage HTML. Grâce à PHP, on peut mettre en place des Systèmes de Gestion de Contenu (C.M.S. pour Content Management System en Anglais) qui utilisent des bases de données pour générer à la volée des pages Internet.

**Le résultat est toujours du HTML** - souvenez-vous, votre navigateur ne sait lire que le HTML, le CSS et le JavaScript ! Lorsque je mets en place un CMS pour un client, comme avec [Perch CMS](http://grabaperch.com), j'utilise le langage PHP[^2].

> " Le problème des CMS, c'est qu'ils donnent l'illusion de sites Internet de qualité "

Le problème des CMS, c'est qu'ils sont souvent utilisés par des néophytes, car ils donnent l'illusion de la création de pages Internet de qualité. Ceci n'est très souvent pas le cas. En effet, le code HTML étant généré par le langage PHP, l'utilisateur ignore le code qu'il produit, ce qui a de nombreuses conséquences, notamment en termes de référencement sur les moteurs de recherche. C'est un paradoxe : les CMS s'adressent aux néophytes mais devraient être utilisés par les experts...

Par exemple, les robots d'indexation de Google et autres sont friands de balises HTML `<h1>`, `<title>`, et `<meta>`, pour n'en citer que quelques unes. Si votre CMS génère une balise `<h3>` au lieu d'une balise `<h1>`, ou pire pas de balise du tout, c'est tout votre référencement qui est mis en péril !

Bien entendu, nombreux sont ceux qui créent des sites via ces outils, sans savoir qu'ils les utilisent mal. Il est en effet tentant de fabriquer soi-même un site Internet. La gratuité est le leurre des naïfs[^3].. Les CMS gratuits (open source) sont en revanche d'excellents outils si vous voulez créer un blog avec vos photos de vacances ! Pour des sites professionnels, je ne les recommande pas, sauf s'ils sont configurés par un développeur professionnel... qui connaît le domaine du référencement !

## Du contenu, du contenu, encore du contenu&nbsp;!
{: #contenu}

C'est une telle évidence qu'on a de nos jours tendance à l'oublier. Internet, c'est avant tout du contenu informatif ! La qualité de ce dernier est certainement la chose la plus importante. Je préfère 100 fois un site au contenu pertinent à un joli site au contenu hasardeux... La bonne (et mauvaise pour certains) nouvelle, c'est que Google aussi ! 

Pour assurer de la qualité au contenu, certaines règles sont à respecter.

### Structurer les données
{: #structurer}

Vous avez certainement déjà rédigé un mémoire, ou une note de stage, ou tout autre document censé présenter les résultats d'une réflexion ou d'une recherche à un public censé ignorer le sujet, tout au moins l'angle sous lequel vous l'abordez.

Pour un site internet c'est la même chose. L'architecture des pages, des liens, des menus, des contenus, est le socle sur lequel s'appuie un site internet de qualité (et ce justement quel que soit le contenu !).

> " Un site internet au contenu structuré de façon logique et pertinente est un gage de qualité pour l'utilisateur. "

J'ai souvent des demandes de la part de clients qui n'aboutissent pas ou mettent très longtemps à aboutir car la structure du site ne parvient pas à émerger. Cela demande au client un travail fastidieux mais nécessaire de mise en forme de leur pensée, à travers l'écrit, mais bien plus, par un travail de structuration des contenus de leur pensée, de leur concept. Un site internet au contenu structuré de façon logique et pertinente est un gage de qualité pour l'utilisateur.

### L'UX, une donnée à ne pas négliger
{: #ux}

Pardonnez mon anglicisme. L'UX, ou User Experience (l'expérience utilisateur) est un domaine récent dans le web, qui va bien au delà de l'ergonomie. Plus, il est nécessaire de penser la structure d'un site internet **en fonction des besoins de ses utilisateurs finaux**. La simplicité est ici le maître mot, ce qui est à l'opposé d'une conception simpliste ! L'internaute doit comprendre le plus facilement possible l'utilisation de votre site. Un bon design est un design qui se fait oublier. C'est un art - je suis bien loin de le posséder - que de présenter des choses complexes en les faisant passer pour simples.

L'expérience utilisateur ne doit pas être faussée par des contenus difficilement accessibles ou masqués par un design trop gourmand, sans négliger la question de l'accessibilité pour les personnes en situation de handicap.

### L'accessibilité, une nécessité, un challenge
{: #accessibilite}

L'expérience de l'Internet est le plus souvent une expérience visuelle. Vous consultez un site, prenez de l'information. Avez-vous pensé aux personnes privées de la vue, ou encore à ceux qui à en raison d'une tétraplégie ne peuvent manipuler une souris ou un clavier ?

> " Voulons-nous créer un Internet inaccessible aux personnes en situation de handicap ? Non. "

L'accessibilité est possible pour les personnes en situation de handicap. Les normes [ARIA](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA), pour Accessible Rich Internet Applications, permettent par exemple à une personne aveugle de naviguer sur votre site grâce à des balises HTML spécifiques. Voulons-nous créer un Internet inaccessible aux personnes en situation de handicap ? Non.

## Conclusion
{: #conclusion}

Dans ce bref article nous avons pu voir qu'un site internet n'est pas une simple juxtaposition d'éléments textuels et graphiques comme on pourrait en faire la composition avec un logiciel de bureau. Au delà des apparences, se cache un monde complexe fait de code informatique, qui permet de mettre en forme un contenu qui se doit d'être le plus pertinent possible au regard de la requête de l'internaute, quel qu'il soit.

Développer des sites internet peut être un loisir. Internet est un espace de liberté - bien illusoire, mais cela ferait l'objet d'une autre publication - et tout un chacun est libre de mettre en ligne des contenus, pour partager, ou simplement s'amuser. Mais dans le cas d'une utilisation professionnelle, comme c'est le cas pour la plupart de mes clients, il est important d'être averti de la somme de travail qui co-existe avec la simple apparence visuelle d'un site.

L'essentiel est donc bien invisible pour les yeux...





[^1]: Le développeur dit *front-end* est celui qui développe la partie visible du site internet. Le développeur *back-end* développe la partie serveur, souvent à l'aide du langage PHP. C'est grâce au *back-end* que des systèmes comme WordPress sont possibles.
[^2]: Je n'ai rien contre WordPress, mais je préfère mettre en place des solutions professionnelles quand je m'adresse à des professionnels.. WordPress est extrêmement populaire, mais peut s'avérer également très complexe à manipuler pour l'utilisateur, et surtout devenir très peu performant dans les mains d'un néophyte qui y installe de nombreux plugins
[^3]: Bien plus astucieux, en donnant l'illusion au créateur de savoir coder un site, de nombreux CMS surfent sur la vague du profit en proposant de nombreux *plugins*, dont les fonctionnalités intéressantes sont payantes, qui viennent pallier le manque de connaissance du public.




