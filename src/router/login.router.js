import { Router } from "express";
import { registerUser } from "../controllers/login.controllers.js";

const router = Router();

router.route("/register").post(registerUser);

export { router as userRouter };


