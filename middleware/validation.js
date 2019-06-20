const { check } = require("express-validator");

const loginValidation = [
  check("email", "Enter an right email").isEmail(),
  check("password", "Please enter password")
    .not()
    .isEmpty()
];
module.exports = { loginValidation };
