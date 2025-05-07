const {
  fetchBusiness,
  postBusiness,
} = require("../controllers/businessHandler");
const express = require("express");
const router = express.Router();

router.get("/", fetchBusiness);

router.post("/", postBusiness);

module.exports = router;
