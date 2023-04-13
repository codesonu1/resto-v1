const router = require("express").Router();
const {
  signup,
  createUser,
  deleteByid,
  deleteMany,
  changePassword,
  login,
} = require("../controller/auth.controller");

router.route("/").get(signup).post(createUser).delete(deleteMany);
router.route("/:_id").delete(deleteByid).post(changePassword);

module.exports = router;
