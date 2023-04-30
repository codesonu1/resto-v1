export const actionType = {
  ON_PRODUCT_LOADING: "on_product_loading",
  ON_PRODUCT_SUCCESS: "on_product_success",
  ON_PRODUCT_ERROR: "on_product_error",
  ON_PRODUCT_USER_ID: "on_product_admin_id",
  ON_PRODUCT_DATA: "on_product_data",
};

export const initialState = {
  isLoading: false,
  error: null,
  user: 0,
  authtoken: null,
};
