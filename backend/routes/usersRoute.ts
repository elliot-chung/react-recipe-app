import express from "express";
import { addUser } from "../controllers/usersController";
import { loginUser } from "../controllers/usersController";

const router = express.Router();

router.post("/addUser", addUser);
router.post("/loginUser", loginUser);

export default router;
