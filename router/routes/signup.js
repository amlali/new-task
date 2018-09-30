var Router = require('express').Router();
var accessContr=require('./../../controllers/access');
Router.route('/signUp').post(accessContr.signUp());

module.exports = Router;