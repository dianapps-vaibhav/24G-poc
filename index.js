const express = require('express');

const app = express();

require('./startup/db')();
require('./routes/route')(app);

app.use((err, req, res) => {
  res.statusCode = 500;
  res.end(`${res.sentry}\n`);
});

app.listen(4000, () => console.log('Server started on port 4000'));
