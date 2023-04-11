import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",

    password: "",
  });

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
              required
            />
            <p className="py-2 ">Password : </p>
            <input
              type="password"
              className="border-2 py-3"
              name="password"
              value={login.password}
              onChange={onchange}
              required
            />
            <p className="border bg-[#D777D2] p-3 rounded-md uppercase my-3 w-[130px] text-center text-[white]">
              Login
            </p>
            <p className="font-[400] capitalize py-3">
              Don’t have an account?{" "}
              <Link to={"/register"}>
                {" "}
                <span className="uppercase text-[#d777D2] px-2">
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
