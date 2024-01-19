const Weather = require('./Weather'); 
const WeatherClient = require('./weatherClient');

jest.mock('./weatherClient');


describe ('Weather', () => {
// async keyword is used to define an asynchronous function
// When you mark a function with the async keyword, it allows you to use the await keyword inside that function.
    test('returns the weather data for a given city', async() => {
        const mockWeatherData = {
            name: 'Bristol',
            temperature: 20,
            weather: 'Windy'
        };

        
        const mockWeatherClient = new WeatherClient()

        // mockWeatherClient.fetchWeatherData.mockImplementation(() => Promise.resolve(mockWeatherData)); => error: TypeError: client.fetchWeatherData is not a function

        mockWeatherClient.fetchWeatherData = jest.fn(() => Promise.resolve(mockWeatherData));
        const weather = new Weather();
        
        // Set the mockWeatherClient in the Weather instance
        weather.weatherClient = mockWeatherClient;

        // Call the method that uses WeatherClient
        await weather.load('Bristol'); // Using load method to fetch weather data

        // Retrieve the loaded weather data
        const result = weather.getWeatherData();

        expect(result).toEqual(mockWeatherData);
        expect(result.name).toBe('Bristol');
        expect(result.temperature).toBe(20);
        expect(result.weather).toBe('Windy');
    });
});