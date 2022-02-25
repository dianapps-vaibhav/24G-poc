var express = require('express');
var app = express();

require('./startup/db.js')();
require('./routes/route.js')(app);

app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(4000, () => console.log('Server started on port 4000'));