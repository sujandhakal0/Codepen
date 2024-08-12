const mongoose = require("mongoose");
const { Schema } = mongoose;

const saveSchema = new Schema({
  fullCode: {
    title: String,
    html: String,
    css: String,
    js: String,
    output: String,
  },
});

module.exports = mongoose.model("Save ", saveSchema);
