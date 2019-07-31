const express = require("express");
const router = express.Router();
const { jwtSecret } = require("../config/config.js");
const auth = require("../middleware/auth");

router.post("/add", auth, (req, res) => {
  console.log(req.body);
});

module.exports = router;
