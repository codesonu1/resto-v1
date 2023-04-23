import { actionType } from "./auth.constant";

export const authLoading = () => {
  return {
    type: actionType.ON_AUTH_LOADING,
  };
};

export const authSuccess = () => {
  return {
    type: actionType.ON_AUTH_SUCCESS,
  };
};

export const authData = (payload) => {
  return {
    type: actionType.ON_AUTH_DATA,
    payload: payload,
  };
};
export const authError = (payload) => {
  return {
    type: actionType.ON_AUTH_ERROR,
    payload: payload,
  };
};

export const authUserById = (payload) => async (dispatch) => {
  return {
    type: actionType.ON_AUTH_ADMIN_ID,
    payload: payload,
  };
};

export const logout = () => {
  return {
    type: actionType.ON_LOGOUT,
  };
};
