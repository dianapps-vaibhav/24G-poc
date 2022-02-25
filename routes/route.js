const cors = require('cors');
const express = require('express');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // eslint-disable-next-line
    require('./account')(app)
};
