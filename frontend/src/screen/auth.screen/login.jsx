import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Userlogin } from "../../store/Auth/auth.thunk";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",

    password: "",
  });

  const submit = () => {
    const { email, password } = login;
    dispatch(Userlogin({ email, password, navigate }));
  };

  const onchange = (e) => {
    const { value, name } = e.target;
    setLogin((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Header />
      <Helmet>
        <title>
          {document.location.pathname.replace("/", "").toUpperCase()}
        </title>
      </Helmet>
      <Container className="mt-[7rem] mx-[4rem]">
        <div className="flex justify-center border bg-[white] shadow-md   ">
          <div>
            <p className="py-2 ">Email : </p>
            <input
              type="text"
              className="border-2 py-3"
              name="email"
              value={login.email}
              onChange={onchange}
              placeholder="Email"
              required
            />
            <p className="py-2 ">Password : </p>
            <input
              type="password"
              className="border-2 py-3"
              name="password"
              value={login.password}
              onChange={onchange}
              placeholder="Password"
              required
            />
            <p
              className="border bg-[#F27E18] p-3 rounded-md uppercase my-3 w-[130px] text-center text-[white]"
              onClick={submit}
            >
              Login
            </p>
            <p className="font-[400] capitalize py-3">
              Don’t have an account?{" "}
              <Link to={"/register"}>
                {" "}
                <span className="uppercase text-[#F27E18] px-2">
                  SIGN UP
                </span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
