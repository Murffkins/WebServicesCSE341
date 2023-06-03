const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.danRoute);
routes.get('/Brett', lesson1Controller.brettRoute);
routes.get('/Ryan', lesson1Controller.ryanRoute);
routes.get('/Tyler', lesson1Controller.tylerRoute);
routes.get('/Jared', lesson1Controller.jaredRoute);

module.exports = routes;