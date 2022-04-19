import express from "express";
import {
  search,
  getRecipeInfo,
  getRandomRecipes,
} from "../controllers/spoonacularController";

const router = express.Router();

router.get("/search", search);
router.get("/getRecipeInfo/:id", getRecipeInfo);
router.get("/getPopularRecipes/:number", getRandomRecipes);

export default router;
