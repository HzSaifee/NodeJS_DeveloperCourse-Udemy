const express = require ('express');
const path = require ('path');

const app = express();
const port = 3001;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Huzefa Saifee'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Huzefa Saifee'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Help Provided!'
    });
})

app.get('/weather', (req, res) => {
    res.send({
        location: "Salt Lake City",
        latitude: -114.5,
        longitude: 45,
        forecast: "Currently its 13 degree celcius."
    })
})

app.listen(port, () => {
    console.log('Server is up on Port 3001.')
})


// app.get('', (req, res) => {
//     res.send('<h1>Weather Application</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Huzefa',
//         age: 23
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h2>About Page</h2>')
// })