import { Container } from "@mui/system";
import { BsCartCheck, BsCash } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="bg-[black]">
        <Container>
          <div className="flex gap-4  justify-center py-[5rem]">
            <p className="text-white text-semibold pt-3 text-[2rem] font-semibold uppercase">
              get food
            </p>
            <p className="bg-[#D777D2] py-3 px-4 rounded-[5px] text-[1.5rem]  font-700 uppercase  text-black">
              choose destination
            </p>
          </div>
          <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2  gap-3 mt-[3rem] ">
            <div>
              <span className="flex justify-center">
                <BsCartCheck className="text-[#D777D2] text-[4rem] " />
              </span>
              <p className="text-[white] py-2 text-center">No minimum order</p>
            </div>
            <div>
              <span className="flex justify-center">
                <MdOutlineDeliveryDining className="text-[#D777D2] text-[4rem]" />
              </span>
              <p className="text-[white] py-2 text-center">
                Free Delivery for orders more than Rs.1000
              </p>
            </div>
            <div>
              <span className="flex justify-center">
                <BsCash className="text-[#D777D2] text-[4rem]" />
              </span>
              <p className="text-[white] py-2 text-center">
                Cash back with every order
              </p>
            </div>
            <div>
              <span className="flex justify-center">
                <RiSecurePaymentLine className="text-[#D777D2] text-[4rem]" />
              </span>
              <p className="text-[white] py-2 text-center">
                Pay online or cash on delivery
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section1;
