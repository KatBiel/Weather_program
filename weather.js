const WeatherClient = require('./weatherClient');

class Weather {
    constructor() {
        this.weatherClient = new WeatherClient();
        this.weatherData = null;
}

    async load(city) {
        this.weatherData = await this.weatherClient.fetchWeatherData(city);
        return this.weatherData;
}

    getWeatherData() {
        if (this.weatherData) {
            console.log(`Weather data for ${this.weatherData.name}:`);
            return this.weatherData;
        } else {
            console.log('Weather data not available. Please load data first.');
        }
    }
}

module.exports = Weather;

// const Weather = require('./Weather'); 