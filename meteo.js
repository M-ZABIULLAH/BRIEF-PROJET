// خواندن نام شهر از فایل conf.json
fetch("conf.json")
  .then(response => response.json())
  .then(data => {
    const ville = data.ville;
    getWeather(ville);
  })
  .catch(error => console.error("Erreur de lecture du fichier conf.json:", error));

// تابع دریافت اطلاعات آب و هوا از API
function getWeather(city) {
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GELK8FTX6S6569XZUW4JPQX6F&contentType=json`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").textContent = `Ville: ${data.address}`;
            document.getElementById("temperature").textContent = `Température: ${data.currentConditions.temp}°C`;
            document.getElementById("weather-description").textContent = `Description: ${data.currentConditions.conditions}`;
        })
        .catch(error => console.error("Erreur de récupération des données météo:", error));
}
function getWeather(city) {
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GELK8FTX6S6569XZUW4JPQX6F&contentType=json`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").textContent = `Ville: ${data.address}`;
            document.getElementById("temperature").textContent = `Température: ${data.currentConditions.temp}°C`;
            document.getElementById("weather-description").textContent = `Description: ${data.currentConditions.conditions}`;
// نمایش آیکون وضعیت هوا
const weatherIcon = getWeatherIcon(data.currentConditions.conditions);
document.getElementById("weather-icon").innerHTML = weatherIcon;
})
.catch(error => console.error("Erreur de récupération des données météo:", error));
}

// تابع برای دریافت آیکون مناسب
function getWeatherIcon(condition) {
const icons = {
"Clear": "☀️",
"Partially cloudy": "⛅",
"Cloudy": "☁️",
"Rain": "🌧️",
"Snow": "❄️",
"Storm": "⛈️"
};
return icons[condition] || "❓"; // اگر وضعیت هوا پیدا نشد، علامت سوال نمایش دهد
}

// بروزرسانی هر ساعت
setInterval(() => {
    fetch("conf.json")
      .then(response => response.json())
      .then(data => getWeather(data.ville));
}, 3600000); // 3600000 میلی‌ثانیه = 1 ساعت
