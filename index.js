// Third modules
const express = require('express');
const bodyParser = require('body-parser');

// Custom Modules
const main = require('./src/main/main');
const station = require('./src/station/station');

/* Variables */
const app = express();

// env
const PORT = process.env.PORT || 3000;

// Configuration
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) =>
  res.json({ message: 'This is a main route to test' })
);

app.post('/unique-character', main.hasUniqueCharacters);
app.post('/prime-factors', main.getPrimeFactors);
app.get('/station-points', station.getNextStationPoints);

// Server "up"
app.listen(PORT, () => console.log(`Running in port ${PORT} ..`));

module.exports = { app };
