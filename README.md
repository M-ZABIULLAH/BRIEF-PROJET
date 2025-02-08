# BRIEF-PROJET
# Affichage de la Météo dans les Transports en Commun

## Description du Projet
Ce projet consiste à développer une interface météo destinée à être affichée sur les écrans d'information des stations de transports en commun et à bord des véhicules. L'objectif est de fournir des informations météorologiques en **temps réel** aux usagers des transports.

## Fonctionnalités Principales
- **Affichage en temps réel de la météo** pour une ville définie.
- **Mise à jour automatique** des données chaque heure.
- **Interface claire et simple** pour une lecture facile.
- **Intégration facile** dans une WebView ou un système existant.
- **Configuration de la ville** à afficher via un fichier `conf.json`.

## Technologies Utilisées
- **HTML / CSS** : Structure et mise en forme de l'interface.
- **JavaScript** : Récupération et affichage des données météo.
- **API Météo** : Utilisation de [Visual Crossing API](https://www.visualcrossing.com/) pour obtenir les données.
- **JSON** : Configuration de la ville et des paramètres.

## Structure des Fichiers
```
/
├── index.html       # Page principale d'affichage
├── style.css        # Feuille de style pour l'interface
├── meteo.js         # Script pour l'interaction avec l'API
├── conf.json        # Fichier de configuration (ville et paramètres)
└── README.md        # Documentation du projet
```

## Installation et Utilisation
### 1. Cloner le dépôt
```sh
git clone https://github.com/votre-utilisateur/meteo-transports.git
cd meteo-transports
```

### 2. Modifier la configuration
Ouvrir `conf.json` et définir la ville souhaitée :
```json
{
    "ville": "Valenciennes"
}
```

### 3. Ouvrir `index.html`
Lancer le fichier dans un navigateur pour tester l'affichage des données météorologiques.

## API Utilisée
Ce projet utilise **Visual Crossing API** pour obtenir les données météorologiques. Vous devez obtenir une clé API en vous inscrivant sur leur site.

**Exemple de requête API :**
```js
fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris?unitGroup=metric&key=VOTRE_CLE_API`)
.then(response => response.json())
.then(data => console.log(data));
```

## Améliorations Possibles
- Ajout d'une **météo prévisionnelle** sur plusieurs jours.
- Changement automatique de la ville selon la **localisation GPS**.
- Intégration avec d'autres services de transport.

## Auteurs
- **Zabiullah Mohammadi**
