var Router = require('express').Router();
var accessContr=require('./../../controllers/sign');
Router.route('/signIn').post(accessContr.signIn());

module.exports = Router;