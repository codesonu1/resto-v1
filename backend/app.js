const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const AuthRouter = require("./src/router/auth.router");
const LoginRouter = require("./src/router/login.router");
const LoginUserRouter = require("./src/router/auth.login.user.router");
const DeliveryLocation = require("../backend/src/router/delivery.location.router");
const ProductRouter = require("./src/router/product.router");
const { error, stack } = require("./src/middleware/ErrorHandle");
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
  })
);
connectDB();
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
    port: req.url,
  });
});
app.use("/api/v1/register", AuthRouter);
app.use("/api/v1/login", LoginRouter);
app.use("/api/v1/loginuser", LoginUserRouter);
app.use("/api/v1/location", DeliveryLocation);
app.use("/api/v1/product", ProductRouter);
app.use(error);
app.use(stack);
module.exports = app;
