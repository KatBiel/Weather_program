## Implement the class WeatherClient, with a method fetchWeatherData that fetches the current weather for a given city using fetch. It should also return a promise, so that we can use the data once it has been received and parsed into an object.


Example usage:

```javascript

const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}:`)
  console.log(weatherData);
});


// Test-drive the class Weather, which uses the class WeatherClient to get the weather for a given city. Make sure the dependency on WeatherClient is mocked. If you need a hand mocking API calls, take a look at the Mocking API Calls pill.


// in node REPL

const client = new WeatherClient();
const weather = new Weather(client);

weather.load('Bristol');


// then, after some time

weather.getWeatherData();


'''
'''
You'll now if it works if (in order of important to less important):

1. The code above works in the REPL, and you get the correct weather data from getWeatherData().
2. Your tests pass.
3. You can break the class WeatherClient and your unit tests for Weather still pass.
'''
