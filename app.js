const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const server = http.createServer(app);
const {
  PORT,
} = require('./controllers/keys');

app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '4mb' }));

app.use(cookieParser());
app.use(logger('dev'));

app.use('/docs', express.static(__dirname + '/public/docs'));

require('./startup/routes')(app);
require('./startup/db')();

server.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`)
});

// For testing:
module.exports = server;
