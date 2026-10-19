const fs = require("node:fs");
const path = require("node:path")

function saveCsv(cityName, rows) {
    const lines = ["date,météo,température moyenne"];
    for (const row of rows) {
        lines.push(`${row.date},${row.weather},${row.temperature}`);
    }

    //dossier 
    const OUTPUT_DIR = path.join(__dirname, "..", "output");

    //Crée le dossier s'il n'existe pas
    fs.mkdirSync(OUTPUT_DIR, { recursive: true});


    //Nommer le fichier csv en fonction du nom de la ville passé en argument
    const fileName = `meteo_${cityName.replace(/\s+/g, "_")}.csv`;

    const filePath = path.join(OUTPUT_DIR, fileName);
    fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8");
    
    return filePath;
}

module.exports = { saveCsv };
