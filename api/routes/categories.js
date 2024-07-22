const router = require("express").Router();
const Category = require("../models/Category");
const Categories = require("../controllers/CategoriesController");
const CategoriesController = require("../controllers/CategoriesController");

const { newCategory, findCategory} = CategoriesController;


router.post("/", newCategory);

router.get("/", findCategory);

module.exports = router;