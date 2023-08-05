const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SUPBASE_SECRET;

async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token not provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, secret);

    if (decoded) {
      req.user = decoded;
    } else {
      return res.status(500).json({ error: "failed" });
    }
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(500).json({ error: "Failed to verify token" });
  }
}
module.exports = verifyToken;
