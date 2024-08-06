const { Router } = require("express");
const { getAllCategories, createCategory, getCategoryById } = require('../controllers/category.controller');

const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.post('/', createCategory);
categoryRouter.get('/:id', getCategoryById);

module.exports = { categoryRouter };