require("dotenv/config")

const { fetchForecast } = require("./weatherApi");
const { getDailyForecast } = require("./writeForecast");
const { saveCsv } = require("./writeCsv");


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

    console.log(`La météo pour ${data.location.name} a été écrite dans le fichier ${fileName}`);
}

//Attraper les erreurs éventuelles
main().catch((err) => {
    if (err.message) console.error(`Erreur : ${err.message}`);
    if (err.cause) console.error(`Cause : ${err.cause}`);
    process.exit(1);
});