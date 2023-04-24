import express from 'express';
import controller from '../controllers/ingredient.controller';

const router = express.Router();

router.get('/', controller.getAllIngredients);
router.post('/', controller.createIngredient);

export = router;
