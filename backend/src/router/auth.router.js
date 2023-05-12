const { signup, login, getUser } = require("../controller/auth.controller");

const router = require("express").Router();

router.route("/user").get(getUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
