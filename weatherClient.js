class WeatherClient {
    fetchWeatherData(city) {
        const apiKey = require('./apiKey');
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

        return new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((weatherData) => {
                    const result = {
                        name: weatherData.name,
                        temperature: weatherData.main.temp,
                        weather: weatherData.weather[0].main
                    };
//function provided by the Promise system that is used to fulfill or resolve the Promise with a specific value (in this case, the result object containing temperature and weather information).
                    resolve(result);
                })
        });
    }
}

module.exports = WeatherClient;

// // const WeatherClient = require('./weatherClient');