export const actionType = {
  ON_AUTH_LOADING: "on_auth_loading",
  ON_AUTH_SUCCESS: "on_auth_success",
  ON_AUTH_ERROR: "on_auth_error",
  ON_AUTH_USER_ID: "on_auth_admin_id",
  ON_AUTH_DATA: "on_auth_data",
  ON_LOGOUT: "on_logout",
};

export const initialState = {
  isLoading: false,
  error: null,
  user: 0,
  authtoken: null,
};
