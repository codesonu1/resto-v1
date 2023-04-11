import { Container } from "@mui/system";
import React from "react";
import { BsSearch, BsSignDeadEnd } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import "../../index.css";

const Section2 = () => {
  return (
    <div className="section2-image">
      <Container>
        <div className="flex gap-3 justify-center pt-[8rem]">
          <p className="uppercase text-[2rem] my-2 text-center text-white">
            GRAB FREE RESTAURANT
          </p>
          <p className="bg-[#D777D2] py-3 px-6 rounded-[5px] text-[1.5rem]  font-700 uppercase  text-black">
            deal
          </p>
        </div>
        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-3 py-[5rem]">
          <div>
            <span className="lg:flex justify-center">
              <BsSearch className="border bg-[white] text-[6rem] p-2 rounded-full text-[#D777D2] shadow-md" />
            </span>
            <p className="lg:text-center text-white lg:px-8 py-3 text-[1.2rem]">
              Search for Restaurants. Filter using cuisine or location
            </p>
          </div>
          <div>
            <span className="lg:flex    justify-center">
              <BsSignDeadEnd className="border bg-[white] text-[6rem] p-2 rounded-full text-[#D777D2] shadow-md" />
            </span>
            <p className="lg:text-center text-white lg:px-8 py-3 text-[1.2rem]">
              Grab your Free Deal
            </p>
          </div>
          <div>
            <span className="lg:flex justify-center">
              <FaMoneyBillWave className="border bg-[white] text-[6rem] p-2 rounded-full text-[#D777D2] shadow-md" />
            </span>
            <p className="lg:text-center text-white lg:px-8 py-3 text-[1.2rem]">
              Show Deal to the Restaurant and get discounts
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
