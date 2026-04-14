import express from "express";
import apiRoutes from "./routes/index.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://hotel.klaisanit.site'
  ],
  credentials: true
}));

app.use(express.json());

app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/api`);
});