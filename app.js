"use strict";

const express = require("express");
const app = express();
// const routes = require("./routes/");
const bodyParser = require("body-parser");

app.set('models', require('./models'));
const models = app.get('models');
const { User, Show, Director } = app.get('models')

// MIDDLEWARE STACK
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public', { extensions: 'html' }));


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;