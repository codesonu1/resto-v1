import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsSignDeadEnd } from "react-icons/bs";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="grid grid-flow-row lg:grid-cols-2 lg:gap-3">
        <Container className="text-center">
          <div className="grid grid-flow-row  grid-cols-2  ">
            <div className="lg:flex justify-center">
              <img src="/logo192.jpg" alt="" className="w-[120px] h-[120]" />
            </div>
            <div className="flex justify-end gap-4 mt-[3rem]">
              <Link to={token ? "/dashboard " : "/login"}>
                <p className="py-2">{token ? "Dashboard " : "Login"}</p>{" "}
              </Link>
              <Link to={token ? "/my-account " : "/register"}>
                <p className="bg-[black] text-white border rounded-md h-[40px] uppercase px-3 py-2">
                  {token ? "My Account" : "sign up"}
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-[5rem]">
            <p className="  uppercase text-[2rem] text-center">
              what did you feel today
            </p>
            <div className="grid grid-flow-row grid-cols-2  my-[2rem] ">
              <div className="flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <Link to={"/delivery"}>
                      {" "}
                      <MdOutlineDeliveryDining className="text-[5rem] text-[#F27E18] border bg-[#faf9f9] rounded-full p-2 shadow-md" />{" "}
                    </Link>
                  </div>

                  <p className="py-3">Get Food & Grocery delivered</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <BsSignDeadEnd className="text-[5rem] text-[#F27E18] border bg-[#faf9f9] rounded-full p-2 shadow-md" />
                  </div>
                  <p className=" py-3">Grab Free Restaurant Deals </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div>
          <img
            src="/assets/side-view-chicken-meatballs-with-greens-ketchup-plate.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
