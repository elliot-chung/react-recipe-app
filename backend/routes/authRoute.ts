import express from "express";
import { checkToken } from "../controllers/authController";

const router = express.Router();

router.get("/check", checkToken);

export default router;
