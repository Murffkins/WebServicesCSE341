const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.getAllData);
routes.get('/:id', lesson1Controller.getSingleData);

module.exports = routes;