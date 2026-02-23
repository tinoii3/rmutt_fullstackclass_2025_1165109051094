import { Router } from "express";
import { getService } from "../controllers/service.controller.js";

const router = Router();

router.get("/", getService);

export default router;