import express from "express";
import  PredictedModel  from "../Controllers/ModelController.js";
import { signup, login } from "../Controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js"
// const { signup, login } = authController;


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/Dashboard",authMiddleware, PredictedModel);

export default router;