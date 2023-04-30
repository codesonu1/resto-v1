const {
  postCategory,
  getAllCategory,
} = require("../controller/product.category.controller");

const router = require("express").Router();

router.route("/:_id").post(postCategory).get(getAllCategory);

module.exports = router;
