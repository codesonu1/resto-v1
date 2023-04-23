import { actionType, initialState } from "./auth.constant";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ON_AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        token: null,
      };
    case actionType.ON_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionType.ON_AUTH_DATA:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.signup,
      };
    case actionType.ON_LOGOUT:
      return {
        ...state,
        authtoken: null,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
