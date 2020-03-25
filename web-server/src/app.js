const express = require ('express');
const path = require ('path');

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index');
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

app.get('/weather', (req, res) => {
    res.send({
        location: "Salt Lake City",
        latitude: -114.5,
        longitude: 45,
        forecast: "Currently its 13 degree celcius."
    })
})

app.listen(3001, () => {
    console.log('Server is up on Port 3001.')
})