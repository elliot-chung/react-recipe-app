import express from "express";
import { addUser, loginUser } from "../controllers/usersController";

const router = express.Router();

router.put("/addUser", addUser);
router.post("/loginUser", loginUser);

export default router;
