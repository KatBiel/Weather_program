const WeatherClient = require('./weatherClient');

// Mocking the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
        name: 'MockCity',
        main: { temp: 20 },
        weather: [{ main: 'Clear' }]
        })
    })
);

describe('WeatherClient', () => {
    test('fetchWeatherData returns the correct weather data', async () => {
        const client = new WeatherClient();
        const weatherData = await client.fetchWeatherData('MockCity');

    expect(weatherData).toEqual({
        name: 'MockCity',
        temperature: 20,
        weather: 'Clear'
    });
});
});
