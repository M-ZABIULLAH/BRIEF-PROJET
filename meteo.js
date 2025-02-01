
fetch("conf.json") // to read the name of city
  .then(response => response.json())
  .then(data => {
    const ville = data.ville;
    getWeather(ville);
  })
  .catch(error => console.error("Erreur de lecture du fichier conf.json:", error));



// to receved the information of the weather from API
function getWeather(city) {
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GELK8FTX6S6569XZUW4JPQX6F&contentType=json`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").textContent = `Ville: ${data.address}`;
            document.getElementById("temperature").textContent = `Température: ${data.currentConditions.temp}°C`;
            document.getElementById("weather-description").textContent = `Description: ${data.currentConditions.conditions}`;

            // to show the icon of the weather 
const weatherIcon = getWeatherIcon(data.currentConditions.conditions);
document.getElementById("weather-icon").innerHTML = weatherIcon;
// fanction to find the best icon
function getWeatherIcon(condition) {
    const icons = {
    "Clear": "☀️",
    "Partially cloudy": "⛅",
    "Cloudy": "☁️",
    "Rain": "🌧️",
    "Snow": "❄️",
    "Storm": "⛈️"
    };
    return icons[condition] || "❓"; // if the condition of the weather did not find, show the ?
    }
        })
        .catch(error => console.error("Erreur de récupération des données météo:", error));
}



// update of condition par/h
setInterval(() => {
    fetch("conf.json")
      .then(response => response.json())
      .then(data => getWeather(data.ville));
}, 3600000); // 3600000 ms = 1 hours
