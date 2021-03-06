const express = require('express');
const winston = require('winston');

const app = express();
require('./startup/logging')();
require('./startup/views')(app);
require('./startup/routes')(app);
require('./startup/prod')(app);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});
