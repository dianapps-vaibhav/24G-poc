const cors = require('cors');
const express = require('express');

const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  
  require('./account')(app);  
}