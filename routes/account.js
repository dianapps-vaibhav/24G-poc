const accountRoutes = require('./accountRoutes');

const apiv1 = '/api/v1';

module.exports = (app) => {
  app.use(`${apiv1}/account/`, accountRoutes);
};
