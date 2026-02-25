import { Router } from "express";
import serviceRoutes from "./service.routes.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

router.use("/services", serviceRoutes);

export default router;