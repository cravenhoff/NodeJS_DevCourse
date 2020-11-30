const request = require("request");
const chalk = require("chalk");

// Store the weather API url
// const url = "http://api.weatherstack.com/current?access_key=ce0de027b68728e11dc342f845708fac&query=9.4438,147.1803";
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3JhdmVuaG9mZiIsImEiOiJja2k0cGFubGkwMmR2MnlyendjdHp5MzZyIn0.aT54AdcByG5QXRRHE0stfQ&limit=1";

/* --- Goal 1: Print a small forecast to the user ---
1. Print: "It is currently 9 degress out. It feels like 5 degrees out."
2. Test your work!
*/

// Use request module
// request({url, json: true}, (err, response) => {
//     // console.log(response.body.current);
//     console.log(chalk.bgBlueBright.black(
//         "Port Moresby Forecast: " + response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out."
//     ));
// });

/* --- Goal 2: Print the lat/long for Los Angeles ---
1. Fire off a new request to the URL explored in browser
2. Have the request module parse it as JSON
3. Print both the latitude and longitue to the terminal
4. Test your work!
*/

request({url, json: true}, (err, response) => {
    // console.log(response.body.features[0].center);
    // const coordinates = response.body.features[0].center;
    // coordinates.forEach(coordinate => {
    //     console.log(coordinate);
    // });
    console.log(chalk.bgGreenBright.black(
        "Latitude: " + response.body.features[0].center[0] + ". Longitude: " + response.body.features[0].center[0]
    ));
});
