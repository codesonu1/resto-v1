import { actionType, initialState } from "./product.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        token: null,
      };
    case actionType.ON_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionType.ON_PRODUCT_DATA:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.signup,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
