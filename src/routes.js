const { Router } = require('express');

const DevController = require('./controlers/DevController');
const SearchControllers = require('./controlers/SearchControllers');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchControllers.index);

module.exports = routes;
