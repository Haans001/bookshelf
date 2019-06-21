const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config.js");
const auth = require("../middleware/auth");
const { loginValidation } = require("../middleware/validation");
//User model
const User = require("../models/User");

// @route   POST auth/signup
// @desc    Register new user
// @access  Public
router.post("/signup", (req, res) => {
  const { userName, email, password, repeatPassword } = req.body;

  if (!userName || !email || !password || !repeatPassword) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (password !== repeatPassword) {
    return res.status(400).json({ msg: "Passwords are not equal" });
  }

  User.findOne({ email }).then(user => {
    if (user)
      return res
        .status(400)
        .json({ msg: "User already exists. Please use diffrent email." });

    const newUser = new User({
      userName,
      email,
      password
    });

    bcrypt.hash(newUser.password, 10, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => {
          jwt.sign(
            { id: user.id },
            jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token,
                user: {
                  id: user.id,
                  userNname: user.userName,
                  email: user.email
                }
              });
            }
          );
        })
        .catch(err => console.log(err));
    });
  });
});

// @route   POST auth/signin
// @desc    Login a user
// @access  Public
router.post("/signin", loginValidation, (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });

    bcrypt.compare(password, user.password).then(isMatching => {
      if (!isMatching) return res.status(400).json({ msg: "Invalid password" });
      jwt.sign(
        { id: user.id },
        jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user: {
              id: user.id,
              userName: user.userName,
              email: user.email
            }
          });
        }
      );
    });
  });
});

// @route   GET auth/user
// @desc    Get a logged user
// @access  Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.status(200).json({ user }));
});

module.exports = router;
