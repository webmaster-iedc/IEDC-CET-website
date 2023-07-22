import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { emailRouter } from "./routes/newsletter.js";
import { formRouter } from "./routes/innovateX.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use(cors());

app.use("/api/v1/newsletter", emailRouter);
app.use("/api/v1/innovatex", formRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
