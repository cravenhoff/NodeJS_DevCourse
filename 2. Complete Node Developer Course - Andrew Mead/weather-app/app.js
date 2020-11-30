const request = require("request");
const chalk = require("chalk");

// Store the weather API url
const url = "http://api.weatherstack.com/current?access_key=ce0de027b68728e11dc342f845708fac&query=9.4438,147.1803";

/* --- Goal 1: Print a small forecast to the user ---
1. Print: "It is currently 9 degress out. It feels like 5 degrees out."
2. Test your work!
*/

// Use request module
request({url, json: true}, (err, response) => {
    // console.log(response.body.current);
    console.log(chalk.bgBlueBright.black(
        "Port Moresby Forecast: " + response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out."
    ));
});

/* --- Goal 2: Print the lat/long for Los Angeles ---
1. Fire off a new request to the URL explored in browser
2. Have the request module parse it as JSON
3. Print both the latitude and longitue to the terminal
4. Test your work!
*/
