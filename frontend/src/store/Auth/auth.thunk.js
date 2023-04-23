import toast from "../../utils/toast";
import { authData, authError, authLoading, authSuccess } from "./auth.action";
import { api } from "../../utils/api";
export const Usersignup =
  ({ name, email, number, password, address, navigate, setSignup }) =>
  async (dispatch) => {
    dispatch(authLoading());
    try {
      await api
        .post("/register", {
          name,
          email,
          password,
          number,
          address,
          navigate,
          setSignup,
        })
        .then((data) => {
          dispatch(authSuccess());
          dispatch(authData(data));
          console.log(data.data.data.usertype);

          console.log(data);
          if (data.data.success === true) {
            toast.success(data.data.message);

            navigate("/login");
          }
        });
    } catch (error) {
      dispatch(authError(error));
      toast.info("User Already Exist");
    }
  };

export const Userlogin =
  ({ email, password, navigate }) =>
  async (dispatch) => {
    dispatch(authLoading());

    try {
      const token = localStorage.getItem("token");
      console.log(token);
      await api
        .post(
          "/login",
          { email, password },
          {
            headers: {
              Authorization: "Bearer" + token,
            },
          }
        )
        .then((data) => {
          console.log(data);
          dispatch(authSuccess());
          console.log(token);
          localStorage.setItem("token", data.data.loginToken);
          if (data.data.loginToken) {
            dispatch(authSuccess());
            toast.success(data.message);
            navigate("/dashboard");
          }
        });
    } catch (error) {
      dispatch(authError(error));
      toast.error("Invalid Criendintals");
    }
  };

export const logout =
  ({ navigate }) =>
  async (dispatch) => {
    dispatch(authSuccess());
    localStorage.clear();
    navigate("/");
  };
