import express from "express";
import Email from "../models/email.js";

const emailRouter = express.Router();

emailRouter.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: "Successfully subscribed!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

export { emailRouter };
