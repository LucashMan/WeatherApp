// Appel de l'API WeatherAPI.com
const API_URL = "https://api.weatherapi.com/v1/forecast.json";

async function fetchForecast(city, apiKey, days = 4) {
    const params = new URLSearchParams({ key: apiKey, q: city, days, aqi: "no", alerts: "no" });
    const response = await fetch(`${API_URL}?${params}`);

    if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        const code = body.error?.code;

        if (code === 1006) {
            throw new Error(`Ville introuvable : ${city}`);
        }
        if (response.status === 401 || response.status === 403) {
            throw new Error("Clé API invalide, désactivée ou quota dépassé");
        }
        throw new Error(`Erreur de l'API : ${body.error?.message ?? response.status}`);
    }

    return response.json();
}

module.exports = { fetchForecast };