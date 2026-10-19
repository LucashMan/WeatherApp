const {formatDate} = require("./utils.js")

//Recuperer les données de prévisions méteo
function getDailyForecast(data) {
    return data.forecast.forecastday.map((day) => ({
        date: formatDate(day.date),
        weather: day.day.condition.text,
        temperature: Math.round(day.day.avgtemp_c),
    }));
}

module.exports = { getDailyForecast };