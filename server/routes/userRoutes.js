const express = require("express");
const {
  test,
  handleSingUp,
  handleUpdateUser,
  handleDeleteUser,
} = require("../controllers/userControllers");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, handleUpdateUser);
router.delete("/delete/:id", verifyToken, handleDeleteUser);

module.exports = router;
