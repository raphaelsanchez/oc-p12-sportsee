# SportSee

Sportsee est une application React qui permet aux utilisateurs de suivre leurs performances sportives. Il s'agit d'un projet fictif réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez OpenClassrooms.

## Context du projet

Dans ce projet, nous allons développer un tableau de bord d'analyse pour le coaching sportif.

La mission consiste à intégrer des graphiques et des diagrammes en utilisant React et à récupérer les données via une API.

La tâche principale sera de développer la page de profil de l'utilisateur, en intégrant des éléments graphiques avancés tels que des graphiques et des diagrammes pour présenter les données d'analyse sportive.

Nous utiliserons React pour construire l'interface utilisateur et la bibliothèques Recharts pour les graphiques.

Il faudra gérer les appels HTTP en utilisant des bibliothèques Fetch pour interagir avec le back-end et récupérer les données nécessaires.

Pour assurer une meilleure collaboration et une compréhension claire du code, les fonctions et composants doivent être documentées en utilisant JSDoc pour JavaScript et en spécifiant les proptypes pour les composants React. Ces pratiques aident à clarifier les attentes en matière de fonctionnalités et de types de données, facilitant ainsi le développement et la maintenance du code par l'équipe.

## Compétences évaluées

1. Assurer la qualité des données d'une application
2. Développer des éléments graphiques avancés à l'aide de bibliothèque Javascript
3. Interagir avec un service web

## Technologies utilisées

- [ViteJS](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Recharts](https://recharts.org/)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Installation

1. [Cloner le projet](https://github.com/raphaelsanchez/oc-p12-sportsee)
2. Lancer la commande `pnpm install` pour installer les dépendances
3. Lancer la commande `pnpm build` pour compiler le projet

## Utilisation

### Lancer le back

Le back peut être récupéré depuis le répo suivant: [sportSee back](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
Pour connaitre son fonctionnement, consultez son [README](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard/blob/master/README.md)

L'API sera accessible depuis `http://localhost:3000`. Si l'application se lance sur une autre port, vous devrez alors mettre à jour `VITE_APP_BASE_URL` depuis le fichier `.env`

### Lancer le front

Lancer la commande `pnpm preview` pour lancer le serveur de prévisualisation.
Pour travailler sur le projet, lancer le script `pnpm dev`

### Navigation

Il n'y a pour le moment que 2 utilisateurs dont les `id` sont respectivement `12` et `18`.
Vous pouvez consulter leur profil depuis les urls suivantes :

- http://localhost:5173/user/12
- http://localhost:5173/user/18

Si vous souhaitez travailler depuis les données mockées, vous pouvez changer la constante `VITE_APP_USE_MOCKED_DATA` en la passant à `true` dans le fichier `.env`

Les données mockées se trouvent dans le dossier `__mock__`

## Auteur

[Raphael Sanchez](https://www.linkedin.com/in/raphael-sanchez-design/)
