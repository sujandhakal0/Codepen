const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./config/database");
const userRouter = require("./routes/userRouter");
const saveRouter = require("./routes/saveRouter");

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: "https://codepen-eta.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    // This line enables credentials
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/save", saveRouter);

connectToDatabase();
module.exports = app;
