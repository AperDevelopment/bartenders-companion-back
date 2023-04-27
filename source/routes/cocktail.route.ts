import express from 'express';
import controller from '../controllers/cocktail.controller';

const cocktailRoutes = express.Router();

cocktailRoutes.get('/', controller.getAllCocktails);
cocktailRoutes.get('/:id', controller.getCocktailById);
cocktailRoutes.post('/', controller.createCocktail);
cocktailRoutes.put('/:id', controller.updateCocktail);
cocktailRoutes.delete('/:id', controller.deleteCocktail);

export default cocktailRoutes;
