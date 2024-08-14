const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} = require("firebase-admin/auth");
const { initializeApp, cert } = require("firebase-admin/app");
const serviceAccount = require("../config/codepen-95878-firebase-adminsdk-iob0y-07a16dced2.json");
const bcryptjs = require("bcryptjs");

initializeApp({
  credential: cert(serviceAccount),
});

exports.signup = async (req, res, next) => {
  try {
    const validationSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = validationSchema.validate(req.body);
    if (error) {
      return next(
        res.status(400).json({
          success: false,
          message: error.details[0].message,
        })
      );
    }
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const isUser = await User.findOne({ email });
    if (isUser) {
      return next(
        res.status(400).json({
          success: false,
          message: "User already exists..",
        })
      );
    }
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
// ............
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return next(
      res.status(400).json({
        success: false,
        message: "Email field is empty",
      })
    );
  }
  if (!password) {
    return next(
      res.status(400).json({
        success: false,
        message: "Password field is empty",
      })
    );
  }

  const isUser = await User.findOne({ email });
  if (!isUser) {
    return next(
      res.status(404).json({
        success: false,
        message: "User not found. Please check your email and try again.",
      })
    );
  }

  const comparePassword = await bcrypt.compare(password, isUser.password);
  if (!comparePassword) {
    return next(
      res.status(404).json({
        success: false,
        message: "User not found. Please check your email and try again.",
      })
    );
  }
  const token = await jwt.sign({ id: isUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
    })
    .json({
      success: true,
      message: "User Logged In successfully",
      isUser,
      token,
    });
};
// ..........
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new Error("User not found"));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
//   ...............
exports.logout = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User logged out.",
    });
};

// .....
