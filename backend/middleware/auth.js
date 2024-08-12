const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../models/userSchema");



exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(
      res.status(401).json({
        success: false,
        meesage: "User not authenticated",
      })
    );
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(401).send("Not authenticated");
  }
};

