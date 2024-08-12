const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "codepen",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Database connection error: ", err);
    });
};

module.exports = { connectToDatabase };
