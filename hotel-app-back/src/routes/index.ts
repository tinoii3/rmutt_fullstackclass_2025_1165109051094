import { Router } from "express";
import serviceRoutes from "./service.routes.js";
import authRoutes from "./auth.routes.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

router.use("/auth", authRoutes);

router.use("/services", serviceRoutes);


// Customer only route
// router.get(
//   "/my-reservations",
//   authenticate,
//   authorize(["customer"]),
//   getMyReservations
// );

export default router;