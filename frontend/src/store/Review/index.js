import { actionType, initialState } from "./Review.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_REVIEW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.ON_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionType.ON_REVIEW_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
