import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routers/authRouter.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
