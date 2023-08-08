const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const verifyAuth = require("../middlewares/verifyAuth");

router.get("/user", verifyAuth, userController.getUserInfo);
router.post("/signup", userController.signUp);

router.post("/signin", userController.signIn);

module.exports = router;
