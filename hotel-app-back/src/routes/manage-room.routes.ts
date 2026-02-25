import { Router } from "express";
import { getRooms } from "../controllers/manage-room.controller.js";

const router = Router();

router.get("/", getRooms);

export default router;