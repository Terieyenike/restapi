const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

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
const port = process.env.PORT || 3005;

// listen to port
app.listen(`${port}`, () => {
  console.log(`Server started on port: ${port}`);
});
