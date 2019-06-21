const { check, validationResult } = require("express-validator");

const loginValidation = [
  check("email", "Enter an right email").isEmail(),
  check("password", "Please enter password")
    .not()
    .isEmpty(),
  function(req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
module.exports = { loginValidation };
