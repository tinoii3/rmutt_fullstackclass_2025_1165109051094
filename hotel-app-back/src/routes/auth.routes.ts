import { Router } from "express";
import { login, refreshTokenService, register } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/refresh", refreshTokenService);

export default router;