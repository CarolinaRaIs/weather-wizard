document.addEventListener('DOMContentLoaded', function() { // added this line

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
//const weatherIcons = {}

const containerWeather = document.querySelector('#weatherContainer');
const weatherForecastBox = document.querySelector('#futureWeatherContainer'); //Added this code

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
    .then((response) => 
    response.json()
    )
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
  //const iconSrc = `./image/${weatherIcons[weatherIcon]}`;
  const iconSrc = `http://openweathermap.org/img/wn/${weatherIcon}.png`;  // Modified this line
  
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

// City History
let historyCity = [];
function saveCityHistory(city) {
  if (historyCity.indexOf(city) !== -1) {
    return;
  }
  historyCity.push(city);

  localStorage.setItem('cityHistory', JSON.stringify(historyCity));

  const cityHistoryList = document.querySelector('#cityHistoryList');
  cityHistoryList.innerHTML = '';

  historyCity.forEach((cityName) => {
    const cityButton = document.createElement('button');
    cityButton.classList.add('city-history');
    cityButton.textContent = cityName;

    cityButton.addEventListener('click', function () {
      getCityWeather(cityName);
    });

    cityHistoryList.appendChild(cityButton);
  });
}

// City Forecast Function
//const weatherForecastBox = document.querySelector('#weatherBox');

function getCityForecast(city) {
  fetch(`${forecastAPI}?q=${city}&appid=${accessKey}&units=imperial&cnt=6`)
    .then((response) => response.json())
    .then((data) => {
      const parsedData = JSON.parse(JSON.stringify(data));
      displayForecastData(parsedData);
    })
    .catch((error) => console.error(`Error: ${error}`));
}



// Display Forecast Data
function displayForecastData(data) {
  const forecastUL = document.createElement('ul');
  
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  
  // slice(1) =  
    // "give me a new array that contains all the elements from the original array...
    // ...starting from the element at index 1 (second element) through the end of the array".
  data.list.slice(1).forEach((forecast, index) => {
    const forecastLI = document.createElement('li');
  
    const temperature = forecast.main.temp;
    const wind = forecast.wind.speed;
    const humidity = forecast.main.humidity;
    //Added this:
    const weatherIcon = forecast.weather[0].icon; // Fetch the icon code
    const iconSrc = `http://openweathermap.org/img/wn/${weatherIcon}.png`; // Build the icon URL

    // This line of code calculates a new date that is 'index' number of days in the future from currentDate, and then converts it into a localized string format
        // .toLocaleDateString() = converts the date into a string, in a format that is readable and localized to the user's locale (e.g. "MM/DD/YYYY" )
        // (index* 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)= This calculates the number of milliseconds for index number of days. 
            // For example, if index is 2, this would calculate the number of milliseconds in two days.
    const date = new Date(currentDate.getTime() + index * 24 * 60 * 60 * 1000).toLocaleDateString();
  
    forecastLI.innerHTML = `
      <div class="forecastListBox"> 
        <p>Date: ${date}</p>
        <p>Temperature: ${temperature}F</p>
        <p>Wind speed: ${wind} m/s</p>
        <p>Humidity: ${humidity}%</p>
        <img src="${iconSrc}" alt="Weather Icon" class="weather-icon">
      </div>
    `;
  
    forecastUL.appendChild(forecastLI);
  });
  
  weatherForecastBox.innerHTML = '';
  weatherForecastBox.appendChild(forecastUL);
}

// Initial Load of Default City
// window.onload=
    // This function runs once the web page has completely loaded. 
    // It's used here to display weather data for a default city when the page is opened.
window.onload = function () {
  getCityWeather('Wilsonville');
  getCityForecast('Wilsonville');
}
});