import express from "express";
import { signup, login } from "../Controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/Dashboard",authMiddleware);

export default router;