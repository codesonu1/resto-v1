const {
  postCity,
  getAllCity,
  deleteCity,
  deleteCityById,
  getById,
  postRestraunt,
  getRestraunts,
  dltRestraunts,
  postCategorys,
  getCategorys,
  dltCategorys,
  postItem,
  dltItems,
  getitem,
  getRestrauntsById,
} = require("../controller/products.controller");

const router = require("express").Router();

router.route("/city").post(postCity).get(getAllCity).delete(deleteCity);
router.route("/city/:_id").get(getById).delete(deleteCityById);

router.route("/restraunt").get(getRestraunts).delete(dltRestraunts);
router.route("/restraunt/:_id").post(postRestraunt).get(getRestrauntsById);

router.route("/categorys").get(getCategorys).delete(dltCategorys);
router.route("/categorys/:_id").post(postCategorys);

// router.route("/items").get(getItems).delete(dltItems);
router.route("/items/:_id").post(postItem).get(getitem);

module.exports = router;
