const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/', ProductController.showAll);
routes.get('/:id', ProductController.showOne);
routes.post('/', ProductController.store);
routes.put('/:id/edit', ProductController.update);
routes.delete('/:id', ProductController.delete);

module.exports = routes;
