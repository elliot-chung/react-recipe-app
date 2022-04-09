import express from "express";
import { search, getRecipeInfo } from "../controllers/spoonacularController";

const router = express.Router();

router.get("/search", search);
router.get("/getRecipeInfo/:id", getRecipeInfo);

export default router;
