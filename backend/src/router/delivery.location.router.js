const router = require("express").Router();
const {
  getAllDestination,
  postDestination,
  deleteLocation,
  updateLocation,
} = require("../controller/delivery.location.controller");
const { uploadDestination } = require("../utils/upload/upload.destination");

router
  .route("/")
  .get(getAllDestination)
  .post(uploadDestination.single("image"), postDestination)
  .delete(deleteLocation);

router.route("/:_id").patch(updateLocation);

module.exports = router;
