const request = require("request");

// Store the weather API url
const url = "http://api.weatherstack.com/current?access_key=ce0de027b68728e11dc342f845708fac&query=37.8267,-122.4233?units=f";

/* --- Goal: Print a small forecast to the user ---
1. Print: "It is currently 9 degress out. It feels like 5 degrees out."
2. Test your work!
*/

// Use request module
request({url, json: true}, (err, response) => {
    // console.log(response.body.current);
    console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
});
