const { signup } = require("../controller/userController");

const router = require("express").Router();

router.route("/").post(signup);

module.exports = router;
