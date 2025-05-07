const Business = require("../models/Business");

const fetchBusiness = async (req, res) => {
  const data = await Business.find();
  res.json(data);
};

const postBusiness = async (req, res) => {
  const newBusiness = new Business(req.body);
  try {
    const saved = await newBusiness.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { fetchBusiness, postBusiness };
