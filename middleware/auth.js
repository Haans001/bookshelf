const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  // Check for token
  if (!token) return res.status(401).json({ errors: "" });

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(400);
  }
}

module.exports = auth;
