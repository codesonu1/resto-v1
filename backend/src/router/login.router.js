const router = require("express").Router();
const { login } = require("../controller/auth.controller");

router.route("/").post(login);

module.exports = router;
