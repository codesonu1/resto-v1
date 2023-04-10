const express = require("express");
const dotenv = require("dotenv").config();
const app = require("./app");

app.use(express.json());

app.listen(process.env.DEV_PORT, () => {
  console.log(
    `The server is  Running on PORT-${process.env.DEV_PORT} in ${process.env.DEV_URI}-URI`
  );
});
