const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/87a374a559f450eb2624a8706e7a1e85/'+ latitude + ','  + longitude +'?units=si';

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to Connect to Weather Service!', undefined);
        } else if(response.body.error){
            callback(response.body.error, undefined);
        } else{
            const weatherForecast = response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degree celsius out. There is ' + response.body.currently.precipProbability + ' % chance of rain.';
            callback(undefined, weatherForecast);
        }
    });
}

module.exports = forecast;