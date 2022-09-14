import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signUp, signIn } from "../Controllers/authController.js";
import { signUpSchema, signInSchema } from "../schemas/authSchema.js";

const router = Router();

router.post("/sign-up", validateSchema(signUpSchema), signUp);

router.post("/sign-in", validateSchema(signInSchema), signIn);

export default router;
