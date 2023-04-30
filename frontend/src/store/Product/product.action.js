import { actionType } from "./product.constant";

export const productLoading = () => {
  return {
    type: actionType.ON_PRODUCT_LOADING,
  };
};

export const productSuccess = () => {
  return {
    type: actionType.ON_PRODUCT_SUCCESS,
  };
};

export const productData = (payload) => {
  return {
    type: actionType.ON_PRODUCT_DATA,
    payload: payload,
  };
};
export const productError = (payload) => {
  return {
    type: actionType.ON_PRODUCT_ERROR,
    payload: payload,
  };
};

export const productUserById = (payload) => async (dispatch) => {
  return {
    type: actionType.ON_PRODUCT_USER_ID,
    payload: payload,
  };
};
