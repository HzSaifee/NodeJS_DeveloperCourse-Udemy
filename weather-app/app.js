const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(address){
    geocode(address, (error, { latitude, longitude, location }) =>{
        if(error){
            console.log(error)
        } else{
            forecast(latitude, longitude, (error, weatherForecast) =>{
                if(error){
                    console.log(error);
                } else {
                    console.log('In ' + location + '. It is ' + weatherForecast)
                }
            });
        }
    });
} else{
    console.log('Please Provide Some Address!')
}


// console.log('Starting');

// setTimeout(() => {
//     console.log('2 Second Timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 Second Timer');
// }, 0);

// console.log('Stopping');


// const request = require('request');

// const url = 'https://api.darksky.net/forecast/87a374a559f450eb2624a8706e7a1e85/37.8267,-122.4233?units=si';
// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to Connect to Weather Service!');
//     } else if(response.body.error){
//         console.log('Error:', response.body.error);
//     } else{
//         console.log(response.body.daily.data[0].summary,'It is currently',response.body.currently.temperature,'degree celsius out. There is',response.body.currently.precipProbability*100,'% chance of rain');
//     }
// });

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Salt%20Lake%20City.json?access_token=pk.eyJ1IjoiaHpzYWlmZWUiLCJhIjoiY2s4M3A0ZTJ4MDFxNTNlbXJ0eDA1c3dpZiJ9.YXIJKSkZ5iw9Qus87hggQg&limit=1';
// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to Connect to Location Service!');
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search.');
//     } else{
//         const data = {
//             latitude: response.body.features[0].center[1],
//             longitude: response.body.features[0].center[0],
//             location: response.body.features[0].place_name
//         }
//         console.log('The Longitude and Latitude of', data.location, 'is', data.longitude, data.latitude, 'respectively');
//     }
// });
