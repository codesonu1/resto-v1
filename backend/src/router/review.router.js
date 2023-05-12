const { protectRoute } = require("../controller/auth.controller");
const {
  postReview,
  getReview,
  dltReview,
  getReviewById,
} = require("../controller/review.controller");

const router = require("express").Router();

router.route("/review").get(protectRoute, getReview).delete(dltReview);
router.route("/review/:_id").post(postReview).get(getReviewById);

module.exports = router;
