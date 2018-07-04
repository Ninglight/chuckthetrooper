# chuckthetrooper

chuckthetrooper est une application permettant de questionner l'API https://api.chucknorris.io/

En soumettant une requête à l'API, celle-ci retourne une liste de résultat affichée à l'utilisateur.

## Pourquoi Npm, Webpack, React et Redux ?

La stack utilisée est particulièrement populaire dans la communauté React. Bon nombre de tuto, d'aide sont présentes pour cette stack. Cela permet de trouver facilement des sujets liés au problèmes récurents dans développeurs.
 
Je crois en le théorème de la _sagesse du peuple_, cependant il est mauvais de toujours suivre les autres sans se faire son propre avis. Je vais donc vous expliquer pourquoi j'ai pu faire ces choix de technologies.
 
### Npm

Pour commencer, la gestion des packages se fait via la gestionnaire de package de Node :**NPM**. Il est le gestionnaire de packagage le plus utilisé aujourd'hui. Il n'est pas le plus rapide, si on le compare à**Yarn**par exemple.
 
 Le choix s'est porté sur les habitudes de travail. Malgré la simple portabilité d'un projet depuis npm vers Yarn, il reste plus 

### Webpack

Longtemps habitué à utiliser**Gulp**, Webpack offre une gestion beaucoup plus modulaire des habituelles task-runners. Avec une communauté de plus en plus conséquentes, il offre un aide sur les loaders à implémenter dans Webpack.

Une monté en compétence fut nécessaire pour l'utilisation de cette technologie en démarrant un fichier de config from scratch.

### React

Pour une gestion simple des différents components de l'application,**React**offe un découpage de l'intégration html intuitif et rapide. Les éléments y 

De plus,**React** 

### Redux

Pour la gestion des states Redux est plus difficilement apréhendable que mobx par exemple, mais il offre une organisation beaucoup plus claire et squalable, dans la logique des components React.

## Getting started

Pour installer l'application, le gestionnaire de package**NPM**va aller nous télécharger toutes les dépendances du projet :
```
npm install
npm run build
```

Cette commande nous permet de compiler notre projet en mode 'production'.
