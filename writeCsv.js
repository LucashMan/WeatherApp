const fs = require("node:fs");

function saveCsv(cityName, rows) {
    const lines = ["date,météo,température moyenne"];
    for (const row of rows) {
        lines.push(`${row.date},${row.weather},${row.temperature}`);
    }

    //Nommer le fichier csv en fonction du nom de la ville passé en argument
    const fileName = `meteo_${cityName.replace(/\s+/g, "_")}.csv`;
    fs.writeFileSync(fileName, lines.join("\n") + "\n", "utf8");
    return fileName;
}

module.exports = { saveCsv };
