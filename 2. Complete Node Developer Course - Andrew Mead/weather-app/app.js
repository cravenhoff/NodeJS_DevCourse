const request = require("request");

// console.log(request);

// Store the weather API url
const url = "http://api.weatherstack.com/current?access_key=ce0de027b68728e11dc342f845708fac&query=37.8267,-122.4233";

// Use request module
request({url}, (err, response) => {
    // console.log(response);
    const data = JSON.parse(response.body);
    console.log(data);
    console.log(data.current);
})