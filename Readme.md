# WeatherApp
 
Script Node.js qui récupère les prévisions météo des prochains jours pour une ville et les écrit dans un fichier CSV.
 
## Exemple
 
```
$ node app.js Nice
La météo pour Nice a été écrite dans le fichier meteo_Nice.csv
```
 
Contenu de `meteo_Nice.csv` :
 
```
date,météo,température moyenne
17/10/2026,Patchy rain nearby,18
18/10/2026,Light rain shower,18
19/10/2026,Overcast,18
20/10/2026,Light rain shower,17
```
 
La température est la moyenne de la journée en °C.
 
## Prérequis
 
- Node.js 18 ou plus (le script utilise `fetch`, intégré à Node depuis la version 18)
- Une clé API gratuite [WeatherAPI](https://www.weatherapi.com/)
## Installation
 
```bash
git clone <url-du-depot>
cd <nom-du-dossier>
npm install
```
 
Créez ensuite votre fichier `.env` et ecire la valeur par votre clé :

```
WEATHER_API_KEY=votre_cle_ici
```

## Utilisation
 
```bash
node app.js <ville>
```
 
- Une seule ville à la fois.
- Un nom composé s'écrit entre guillemets : `node app.js "New York"`.
- Le fichier est créé dans le dossier courant, sous le nom `meteo_<Ville>.csv`