// Third modules
import express from 'express';
import pkg from 'body-parser';


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

app.use(pkg.json());

// Routes
app.get('/', (req, res) =>
  res.json({ message: 'This is a main route to test' })
);

// Server "up"
app.listen(PORT, () => console.log(`Running in port ${PORT} ..`));

export default { app };
