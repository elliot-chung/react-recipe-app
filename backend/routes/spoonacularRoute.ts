import express from "express";
import {
  simpleSearch,
  getRecipeInfo,
} from "../controllers/spoonacularController";

const router = express.Router();

router.get("/search", simpleSearch);
router.get("/getRecipeInfo/:id", getRecipeInfo);

export default router;
