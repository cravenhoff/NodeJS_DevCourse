const request = require("request");

// Store the weather API url
const url = "http://api.weatherstack.com/current?access_key=ce0de027b68728e11dc342f845708fac&query=37.8267,-122.4233";

// Use request module
request({url, json: true}, (err, response) => {
    console.log(response.body.current);
})