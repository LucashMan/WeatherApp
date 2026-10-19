require("dotenv/config")

const { fetchForecast } = require("./src/weatherApi");
const { getDailyForecast } = require("./src/writeForecast");
const { saveCsv } = require("./src/writeCsv");
const { log } = require("./src/logger");

async function main() {
    const args = process.argv.slice(2);

    //Verification ici qu'il y ait bien un seul argument
    if (args.length !== 1) {
        throw new Error('Il faut une seule ville, ex : node app.js Nice');
    }

    //Verification ici que la clé API soit definie
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        throw new Error("Verifier la variable d'environnement WEATHER_API_KEY dans votre .env, Ex : WEATHER_API_KEY=MY_KEY");
    }

    const data = await fetchForecast(args[0], apiKey);
    const rows = getDailyForecast(data);
    const fileName = saveCsv(data.location.name, rows);


    log.info(`La météo pour ${data.location.name} a été écrite dans le fichier ${fileName}`);
}

//Attraper les erreurs éventuelles et systématiquement les logger avant de quitter le programme
main().catch((err) => {
    if (err.message) log.error(`Erreur : ${err.message}`);
    if (err.cause) log.error(`Cause : ${err.cause}`);
    process.exit(1);
});