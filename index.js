
const apiKey = require('./apiKey');

const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
    .then((response) => response.json())
    .then((weatherData) => {
    console.log(weatherData)
    console.log('Temperature:', weatherData.main.temp, '°C');
    console.log('Weather:', weatherData.weather[0].main);
});

console.log('Requesting weather data');