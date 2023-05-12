const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const AuthRouter = require("./src/router/auth.router");
const ProductsRouter = require("../backend/src/router/products.router");
const ReviewRouter = require("./src/router/review.router");
const { error, stack } = require("./src/middleware/ErrorHandle");
const fileUpload = require("express-fileupload");

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

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
    port: req.url,
  });
});
app.use("/api/v1", AuthRouter);
app.use("/api/v1", ProductsRouter);
app.use("/api/v1/user", ReviewRouter);
app.use(error);
app.use(stack);
module.exports = app;
