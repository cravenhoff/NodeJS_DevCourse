const request = require("request");
const chalk = require("chalk");

// Store the weather API url
const url = "http://api.weatherstack.com/current?access_key=ce0de027b68728e11dc342f845708fac&query=Port%20Moresby";
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Port%20Moresby.json?access_token=pk.eyJ1IjoiY3JhdmVuaG9mZiIsImEiOiJja2k0cGFubGkwMmR2MnlyendjdHp5MzZyIn0.aT54AdcByG5QXRRHE0stfQ&limit=1";

/* --- Goal 1: Print a small forecast to the user ---
1. Print: "It is currently 9 degress out. It feels like 5 degrees out."
2. Test your work!
*/

// Use request module
request({url, json: true}, (err, response) => {
    if(err) {
        console.log(chalk.bgRedBright.black("Unable to connect to weather services!"));
    } else if(response.body.error) {
        console.log(chalk.bgRedBright.black("Unable to find location!"));
    } else {
        // city name, weather description, temperature, feels like, precipitation, humidity and wind speed
        console.log(chalk.bgBlueBright.black.underline(response.body.location.name + " Forecast:"));
        console.log(chalk.bgBlueBright.black(
            response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out. \nPrecipiation: " + response.body.current.precip + "% \nHumidity: " + response.body.current.humidity + "% \nWind Speed: " + response.body.current.wind_speed + "km/h"
        ));
    }
});

/* --- Goal 2: Print the lat/long for Los Angeles ---
1. Fire off a new request to the URL explored in browser
2. Have the request module parse it as JSON
3. Print both the latitude and longitue to the terminal
4. Test your work!
*/

/* --- Goal 3: Handle errors for geocoding request ---
1. Setup an error handler for low-level errors
2. Test by disabling network request and running the app
3. Setup error handling for no matching results
4. Test by altering the search term and running the app
*/

// Geocoding: Address => Lat/Long => Weather Forecast
request({url: geocodeURL, json: true}, (err, response) => {
    if(err) {
        console.log(chalk.bgRedBright.black("Unable to connect to location services!"));
    } else if(response.body.features.length === 0) {
        console.log(chalk.bgRedBright.black("Unable to find location. Try another search!"));
    } else {
        const lat = response.body.features[0].center[1];
        const long = response.body.features[0].center[0];
        console.log(chalk.bgGreenBright.black("Lat: " + lat + " Long: " + long));
    }
}); 
