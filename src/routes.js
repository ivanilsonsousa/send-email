const express = require('express');

const routes = express.Router();

const EmailController = require('./controllers/EmailController');
routes.post('/send-email', EmailController.send);

module.exports = routes;