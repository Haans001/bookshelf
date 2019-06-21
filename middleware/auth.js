const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  // Check for token
  if (!token) return res.status(401).json({ errors: "Invalid token" });

  try {
    // Verify token
    req.user = jwt.verify(token, jwtSecret);
    next();
  } catch (e) {
    return res.status(400).json({ errors: "Invalid token" });
  }
}

module.exports = auth;
