const router = require("express").Router();
const {
  userlogin,
  getAllUser,
  deleteAllUser,
} = require("../controller/userController");

router.route("/").post(userlogin).get(getAllUser).delete(deleteAllUser);

module.exports = router;
