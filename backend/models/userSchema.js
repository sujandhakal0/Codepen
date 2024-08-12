// userSchema.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "password must have minimum of 8 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
