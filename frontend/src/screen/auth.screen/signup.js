import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Usersignup } from "../../store/Auth/auth.thunk";
import toast from "../../utils/toast";
import { Helmet } from "react-helmet";

const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    address: "",
  });

  const [isLoading, setLoading] = useState(false);

  const onchange = (e) => {
    const { value, name } = e.target;
    setSignup((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    const { name, email, number, password, address } = signup;
    setLoading(true);
    if (
      (name === "",
      email === "",
      number === "",
      password === "",
      address === "")
    ) {
      toast.info("Feild Cannot be null");
    }
    dispatch(
      Usersignup({
        name,
        email,
        number,
        password,
        address,
        navigate,
        setSignup,
      })
    );
  };

  return (
    <div>
      <Header />
      <Helmet>
        <title>
          {document.location.pathname.replace("/", "").toUpperCase()}
        </title>
      </Helmet>
      <div className="mt-[8rem]  ">
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
              type="address"
              label="Address"
              variant="outlined"
              name="address"
              value={signup.address}
              onChange={onchange}
              placeholder="Address"
              required
            />
          </div>

          <div className="  flex gap-2 mt-[2rem]">
            <input
              type="checkbox"
              required
              className="border border-[balck] w-[20px] h-[20px]"
            />
            <p>Please Agree to all the Terms & Conditions</p>
          </div>
          <button
            className="border bg-[#F27E18] p-3 rounded-md uppercase my-3 w-[130px] text-center text-[white]"
            onClick={submit}
          >
            sign up
          </button>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
