const axios = require('axios');

function fetchWeather(location) {
  const apiKey = 'd8dc0c4e46msh5e9b4fe566d448ep1f0a66jsn2487f1d2e93b'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl)
    .then(response => {
      const weather = response.data;
      console.log(`Weather in ${weather.name}:`);
      console.log(`Temperature: ${weather.main.temp}°C`);
      console.log(`Conditions: ${weather.weather[0].description}`);
    })
    .catch(error => {
      console.error('Error fetching weather:', error.message);
    });
}

const location = process.argv[2]; // Get location from command-line argument
if (location) {
  fetchWeather(location);
} else {
  console.log('Please provide a location.');
}
