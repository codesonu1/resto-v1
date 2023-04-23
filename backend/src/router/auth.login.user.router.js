const { getuserlogin } = require("../controller/auth.controller");
const { authError } = require("../middleware/authError");

const router = require("express").Router();

router.route("/").post(authError, getuserlogin);

module.exports = router;
