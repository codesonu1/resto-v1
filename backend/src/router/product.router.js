const {
  getAllProduct,
  postDelivery,
  postItems,
  deleteProduct,
  postMenu,
} = require("../controller/product.controller");
const { uploadDestination } = require("../utils/upload/upload.destination");

const router = require("express").Router();

router
  .route("/")
  .get(getAllProduct)
  .post(uploadDestination.single("image"), postDelivery)
  .delete(deleteProduct);

router
  .route("/:_id")
  .post(uploadDestination.single("image"), postItems, postMenu);

module.exports = router;
