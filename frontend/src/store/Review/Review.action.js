import { actionType } from "./Review.constant";

export const reviewLoading = () => {
  return {
    type: actionType.ON_REVIEW_LOADING,
  };
};
export const reviewSuccess = () => {
  return {
    type: actionType.ON_REVIEW_SUCCESS,
  };
};
export const reviewError = () => {
  return {
    type: actionType.ON_REVIEW_ERROR,
  };
};
