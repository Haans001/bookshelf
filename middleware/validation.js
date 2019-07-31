const { check, validationResult } = require("express-validator");

const loginValidation = [
  check("email", "Enter an right email").isEmail(),
  check("password", "Please enter password")
    .not()
    .isEmpty(),
  function(req, res, next) {
    errors(req, res, next);
  }
];

const registerValidation = [
  check("userName", "Invalid user name").matches(/^(?=.*\d).{5,10}$/),
  check("email", "Invalid email").isEmail(),
  check("password", "Invalid password").matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/
  ),
  check("repeatPassword", "Passwords are not equal").equals("password"),
  function(req, res, next) {
    errors(req, res, next);
  }
];

function errors(req, res, next) {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = { loginValidation, registerValidation };
