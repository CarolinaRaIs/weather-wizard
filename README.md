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