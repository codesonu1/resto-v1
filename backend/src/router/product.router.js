const {
  getAllProduct,
  postDelivery,
  postItems,
  deleteProduct,
  findByIdProduct,
  deleteByIdProduct,
} = require("../controller/product.controller");
const { protectRoute } = require("../controller/userController");

const router = require("express").Router();

router.route("/").get(getAllProduct).post(postDelivery).delete(deleteProduct);

router
  .route("/:_id")
  .post(postItems)
  .get(findByIdProduct)
  .delete(deleteByIdProduct);

module.exports = router;
