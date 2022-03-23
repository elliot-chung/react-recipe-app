import express from "express";
import {
  addFavorite,
  copyFavorites,
  getFavorites,
  moveFavorites,
  removeFavorites,
  addEmptyList,
  removeList,
} from "../controllers/favoritesController";

const router = express.Router();

router.get("/getFavorites", getFavorites);
router.put("/addFavorite", addFavorite);
router.delete("/removeFavorites", removeFavorites);
router.patch("/moveFavorites", moveFavorites);
router.patch("/copyFavorites", copyFavorites);
router.put("/addEmptyList", addEmptyList);
router.delete("/removeList", removeList);

export default router;
