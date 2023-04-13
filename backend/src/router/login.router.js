const router = require("express").Router();
const { login } = require("../controller/auth.controller");
const { authError } = require("../middleware/authError");

router.route("/").post(authError, login);

module.exports = router;
