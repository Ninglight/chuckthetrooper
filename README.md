# chuckthetrooper

chuckthetrooper est une application permettant de questionner l'API https://api.chucknorris.io/

En soumettant une requête à l'API, celle-ci retourne une liste de résultat affichée à l'utilisateur.

Vous pouvez consultez le resultat à l'adresse : https://chuckthetrooper.valentinbourreau.com/

## Pourquoi Npm, Webpack, React et Redux ?

La stack utilisée est particulièrement populaire dans la communauté React. Bon nombre de tuto, d'aide sont présentes pour cette stack. Cela permet de trouver facilement des sujets liés au problèmes récurents dans développeurs.
 
Je crois en le théorème de la _sagesse du peuple_, cependant il est mauvais de toujours suivre les autres sans se faire son propre avis. Je vais donc vous expliquer pourquoi j'ai pu faire ces choix de technologies.
 
### Npm

Pour commencer, la gestion des packages se fait via la gestionnaire de package de Node :**NPM**. Il est le gestionnaire de packagage le plus utilisé aujourd'hui. Il n'est pas le plus rapide, si on le compare à**Yarn**par exemple.
 
Ce choix s'est porté sur les habitudes de travail. Une tâche aussi simple que l'import de dépendance est rarement remis en question de mon côte. Le fait de devoir le justifié me mène à penser que mes prochains projets seront portés sur Yarn.

### Webpack

Longtemps habitué à utiliser**Gulp**, Webpack offre une gestion beaucoup plus modulaire des habituelles task-runners. Avec une communauté de plus en plus conséquentes, les loaders à implementer dans Webpack sont de plus en plus fournit en aide et en paramètre.

Une monté en compétence fut nécessaire pour l'utilisation de cette technologie en démarrant un fichier de config from scratch.

### React 

Pour une gestion simple des différents éléments de notre application,**React**offe un découpage de l'intégration html intuitif et rapide. Les éléments y sont stockés dans des components et peuvent être centralisés.

### Redux -> Mobx

Pour une utilsation du gestionnaire de components React, un systeme de centralisation des données est nécessaire. Un gestionnaire de state est certes lourd pour ce type d'application, mais il offre une lisibilité dans le transfert des données qui ne s'effectue pas par les 'props' de React entre tous les éléments parents et enfants.

Pour la gestion des states, Redux est plus difficilement appréhendable que mobx, par exemple, mais il offre une organisation beaucoup plus construite et squalable, dans la logique des components React. Après quelques essais de mise en place de l'architecture Redux, le pattern utilisé me paraissait beaucoup trop gros pour cette application, perdant de son sens. Mobx se présentait donc comme une solution beaucoup plus simple et implémentable rapidement.
 
Il fut simple de mettre en place mobx mais la gestion des retours asynchrone de notre api.chucknorris a complexifier l'utilisation de cet outil.

## Getting started

Pour installer l'application, le gestionnaire de package**NPM**va aller nous télécharger toutes les dépendances du projet :
```
npm install
npm run build
```

Cette suite de commande nous permet de compiler notre projet en mode 'production'.
