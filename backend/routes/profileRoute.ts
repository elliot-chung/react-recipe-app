import express from "express";
import { checkToken } from "../controllers/profileController";

const router = express.Router();

router.get("/check", checkToken);

export default router;
