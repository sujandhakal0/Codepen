const express = require("express");
const {
  signup,
  login,
  getUser,
  logout,
} = require("../controller/userController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logout);

module.exports = router;
