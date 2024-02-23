const User = require("../models/user-model");
const { errorHandler } = require("../utils/error");
const bcrypt = require("bcryptjs");

function test(req, res) {
  res.status(200).json({ msg: "API is working" });
}

async function handleUpdateUser(req, res, next) {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}

async function handleDeleteUser(req, res, next) {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User has been deleted..." });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  test,
  handleUpdateUser,
  handleDeleteUser,
};
