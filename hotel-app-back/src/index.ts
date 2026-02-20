import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});