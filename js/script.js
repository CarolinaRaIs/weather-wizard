// Variables
const formSearch = document.querySelector('.searchForm');
const searchButton = document.querySelector('.btnSearch');
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast';
const userCity = 'CITY_NAME';
// API Key obtain throough OpenWeatherMap API
const accessKey = 'a76d5ca55046a6730024f9d3c573ab2b';

//The codes such as 01d, 01n, 02d, etc., are part of the icon naming convention used by the OpenWeatherMap API. 
//The first two digits represent the weather condition: ie: 01=clear sky
//d = Daytime
//n = Nighttime
const weatherIcons = {
  '01d': 'clear_sky_day.png',
  '01n': 'clear_sky_night.png',
  '02d': 'few_clouds_day.png',
  '02n': 'few_clouds_night.png',
  '03d': 'scattered_clouds_day.png',
  '03n': 'scattered_clouds_night.png',
  '04d': 'broken_clouds_day.png',
  '04n': 'broken_clouds_night.png',
  '09d': 'shower_rain_day.png',
  '09n': 'shower_rain_night.png',
  '10d': 'rain_day.png',
  '10n': 'rain_night.png',
  '11d': 'thunderstorm_day.png',
  '11n': 'thunderstorm_night.png',
  '13d': 'snow_day.png',
  '13n': 'snow_night.png',
  '50d': 'mist_day.png',
  '50n': 'mist_night.png'
}

const containerWeather = document.querySelector('#weatherContainer');

// Search Form Submission Event Listener
formSearch.addEventListener('submit', function (e) {
  e.preventDefault();
  const cityName = e.target.elements.cityName.value;
  getCityWeather(cityName);
  getCityForecast(cityName);
  e.target.elements.cityName.value = '';
});

// City Weather Function
function getCityWeather(city) {
  fetch(`${weatherAPI}?q=${city}&appid=${accessKey}&units=imperial&cnt=5`)
    .then((response) => response.json())
    .then((data) => {
      const parsedData = JSON.parse(JSON.stringify(data));
      displayWeatherData(parsedData);
      saveCityHistory(parsedData.name);
    })
    .catch((error) => console.error(`Error: ${error}`));
}

// Display Weather Data
function displayWeatherData(data) {
  const weatherUL = document.createElement('ul');
  const weatherLI = document.createElement('li');
  const weatherIcon = data.weather[0].icon;
  const iconSrc = `./image/${weatherIcons[weatherIcon]}`;
  
  weatherLI.innerHTML = `
    <h3 class="cityNameH3">${data.name}</h3>
    <div class="weatherListBox">
      <p class="cityDate">Date: ${new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p>Temperature: ${data.main.temp}F</p>
      <p>Wind speed: ${data.wind.speed} m/s</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <img src="${iconSrc}" alt="Weather Icon">
    </div>
  `;
  weatherUL.appendChild(weatherLI);
  
  containerWeather.innerHTML = '';
  containerWeather.appendChild(weatherUL);
}

