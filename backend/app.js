const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const AuthRouter = require("./src/router/auth.router");
const LoginRouter = require("./src/router/login.router");
const { error, stack } = require("./src/middleware/ErrorHandle");
const { connectDB } = require("./src/config/db");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
connectDB();
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
    port: req.url,
  });
});
app.use("/api/v1/register", AuthRouter);
app.use("/api/v1/login", LoginRouter);
app.use(error);
app.use(stack);
module.exports = app;
