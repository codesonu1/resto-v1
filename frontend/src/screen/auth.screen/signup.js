import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Header from "./header";

const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    Cpassword: "",
  });

  const onchange = (e) => {
    const { value, name } = e.target;
    setSignup((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <Header />
      <div className="mt-[8rem] ">
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row gap-3 justify-center border bg-[white] shadow-md px-3 py-[4rem] ">
            <TextField
              id="outlined-basic"
              type="text"
              label="Name"
              name="name"
              value={signup.name}
              variant="outlined"
              placeholder="Name"
              required
              onChange={onchange}
            />
            <TextField
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              value={signup.email}
              onChange={onchange}
              placeholder="Email"
              required
            />
            <TextField
              id="outlined-basic"
              type="number"
              label="Number"
              variant="outlined"
              name="number"
              value={signup.number}
              onChange={onchange}
              placeholder="Number"
              required
            />

            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              value={signup.password}
              onChange={onchange}
              placeholder="Password"
              required
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Confirm Password"
              variant="outlined"
              name="Cpassword"
              value={signup.Cpassword}
              onChange={onchange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <p className="border bg-[#D777D2] p-3 rounded-md uppercase my-3 w-[130px] text-center text-[white]">
            sign up
          </p>
          <div className="  flex gap-2">
            <input
              type="checkbox"
              required
              className="border border-[balck] w-[20px] h-[20px]"
            />
            <p>Please Agree to all the Terms & Conditions</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
