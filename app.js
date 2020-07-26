const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

// home route
app.get('/', (req, res) => {
  res.send('<h1>connecting to mongoose to store my post database.</h1>');
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to DB.');
  }
);

// app PORT
const PORT = 7007;

// listen to port
app.listen(`${PORT}`, () => {
  console.log(`Server started on port${PORT}`);
});
