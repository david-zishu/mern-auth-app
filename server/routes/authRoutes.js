const express = require("express");
const {
  handleSingUp,
  handleSingIn,
  handleGoogleSingIn,
  handleSignOut,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/signup", handleSingUp);
router.post("/signin", handleSingIn);
router.post("/google", handleGoogleSingIn);
router.get("/signout", handleSignOut);

module.exports = router;
