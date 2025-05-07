const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model("Business", businessSchema);
