const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.get("/*", (req, res) => {
  res.status(200).json({
    message: "API is running",
    port: req.url,
  });
});

module.exports = app;
