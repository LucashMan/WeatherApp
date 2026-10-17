//Formater la date ISO en francais ((YYYY,MM,DD) => (DD/MM/YYYY))
function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}

//Recuperer les données de prévisions méteo
function getDailyForecast(data) {
    return data.forecast.forecastday.map((day) => ({
        date: formatDate(day.date),
        weather: day.day.condition.text,
        temperature: Math.round(day.day.avgtemp_c),
    }));
}

module.exports = { getDailyForecast };