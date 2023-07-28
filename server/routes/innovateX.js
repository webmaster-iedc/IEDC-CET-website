import express from "express";
import Form from "../models/form.js";

const formRouter = express.Router();

formRouter.post("/", async (req, res) => {
  const { name, mobile, email, year, college, domains } = req.body;

  try {
    const newForm = new Form({
      name,
      mobile,
      email,
      year,
      college,
      domains,
    });

    await newForm.save();
    res.status(200).json({ message: "Successfully subscribed!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

export { formRouter };
