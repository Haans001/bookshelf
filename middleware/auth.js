const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) return res.status(401).json({ msg: "Your session Expired" });

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Your session Expired" });
  }
}

module.exports = auth;
