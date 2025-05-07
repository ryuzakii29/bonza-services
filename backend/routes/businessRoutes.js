const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

router.get("/", async (req, res) => {
  const data = await Business.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const newBusiness = new Business(req.body);
  try {
    const saved = await newBusiness.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
