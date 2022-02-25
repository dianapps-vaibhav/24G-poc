const mongoose = require('mongoose');

module.exports = () => {
  const url = 'mongodb://localhost:27017/24g';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.set('debug', true);
  mongoose
    .connect(url, options)
    .then(() => console.log('connected to mongodb'))
    .catch((err) => console.log(`Mongo Error: ${err}`));
};
