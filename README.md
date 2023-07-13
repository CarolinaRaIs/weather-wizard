# weather-wizard
A 5 day weather forecast based on the location searched. 

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

The banner image is a cropped version of this image: https://www.americanelements.com/file/3368 

## [Description:](#description)

Weather Wizard is a web-based weather forecasting application that allows users to search for weather conditions in a specific city. The application provides current weather information as well as a 5-day forecast. Users can enter the name of a city in the search bar to view the relevant weather data. Additionally, Weather Wizard keeps a history of previous searches which users can click on for quick access.

The application utilizes the following technologies and frameworks so that the application can deliver a seamless experience:

    HTML:
    HTML is used for structuring the content of the application. It provides the basic structure, which is then enhanced through CSS and JavaScript.

    CSS:
    CSS is used for the presentation layer of the app. It is responsible for styling, including colors, layouts, and fonts. This application also utilizes CSS custom properties (variables) for a consistent color scheme and other values.

    JavaScript:
    JavaScript is responsible for the functionality of the application. It enables user interaction, communicates with the weather API, and manipulates the DOM to update the content.

    OpenWeatherMap API
    The OpenWeatherMap API is utilized to fetch current weather data and forecasts based on city names. The application sends HTTP requests to the API and processes the JSON responses to extract the required data. It also provides the icons for each day the weather is presented.

    day.js
    day.js is a lightweight JavaScript library used for parsing, validating, manipulating, and formatting dates. It’s particularly helpful for formatting the date timestamps received from the OpenWeatherMap API. For example, a timestamp from the weather API, will use dayjs to convert it into a more readable date format.

    Fetch API
    The Fetch API is used for making network requests to the OpenWeatherMap API. It is a modern alternative to XMLHttpRequest and makes it easier to request and retrieve data from a server.

    Flexbox
    CSS Flexbox is utilized for creating a flexible layout structure. It allows easy alignment and distribution of elements within a container, and is heavily used in responsive designs.

    Google Fonts
    Google Fonts is used to include custom fonts in the application for better typography and user experience.

    GitHub
    GitHub is used for version control and source code management. It enables the tracking of changes, collaboration, and the efficient handling of various project versions.

    Media Queries
    Media Queries in CSS are used for creating responsive designs. They enable the application to adapt its layout and styling according to the screen size and resolution.

## [Table of Contents:](#table-of-contents:)
   
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
   
## [Installation:](#installation:)

1. Clone the Repository

    Open your terminal/command prompt, navigate to the directory where you want to clone the repository and run:

    `git clone https://github.com/YourUsername/weather-wizard.git`

    Replace YourUsername with your GitHub username.

2. Navigate into the Directory

    `cd weather-wizard`

3. Install the Dependencies

    Run the following command to install the project dependencies:

    `npm install`

4. Open the Project

    Open the project folder in your text editor.

5. Setup API Key

    You need to obtain an API key from OpenWeatherMap. Register for a new API key follow this link:https://home.openweathermap.org/users/sign_up. You may need to wait for up to 2 hours for the API key to activate.

    Once you get the API key, open the script.js file and replace {API key} with your actual API key in the following line:

    `const API_KEY = '{API key}';`

6. Run the Application

    You can now open the index.html file in your browser to see the application.


## [Usage:](#usage:)

* Input the city name in the search box and click the "Search" button.

* The application will display the current weather conditions including the city name, the date, an icon representation of the weather conditions, the temperature, the humidity, and the wind speed.

* It will also display the 5-day forecast for the city including the date, an icon representation of the weather conditions, the temperature, the wind speed, and the humidity.

* Your search history will be stored and you can click on a previously searched city to view its weather conditions again

***Note on Data Persistence:***

*This application uses localStorage to store the search history. When you reload the page or revisit it later, your search history will be preserved until you clear your browser's local storage.*