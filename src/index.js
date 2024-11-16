require('express-async-errors');
const express = require('express');
const configCors = require('./configs/cors.config');
const rateLimiter = require('./middlewares/rate-limitter.middleware');
const errorHandler = require('./middlewares/error-handler.middleware');
const router = require('./api/routes/routes');
const app = express();

app.use(express.json());
app.use(configCors());
app.use(rateLimiter);


app.use("/public", express.static('public'));
app.use('/api',router);

app.use(errorHandler);

module.exports = app;