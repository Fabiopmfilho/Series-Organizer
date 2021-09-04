import express from 'express';
import SerieController from './controllers/SerieController.js'

const routes = express.Router();

// métodos 
routes.post('/series', SerieController.post)

routes.get('/series/:id', SerieController.getById)
routes.get('/series', SerieController.get)

routes.put('/series/:id', SerieController.update)

routes.delete('/series/:id', SerieController.delete)

export default routes;