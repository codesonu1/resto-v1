import { Container } from "@mui/system";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#D777D2] ">
      <Container>
        <div className="lg:flex grid grid-flow-row md:grid-cols-3  lg:gap-3 capitalize text-[1.2rem]  pt-[5rem] pb-[3rem] justify-center text-[white]">
          <p>about us</p>
          <p>Become Our Restaurant Partner</p>
          <p>help & support</p>
          <p>term & condition</p>
          <p>privacy policy</p>
          <p>FAQs</p>
        </div>
        <hr className="text-[white] text-[2rem] pb-3" />
        <div className="grid grid-flow-row grid-cols-2 py-3 ">
          <div className="text-[white] flex gap-2">
            {new Date().getFullYear()} <p className="font-[400]">resto-v1</p>
          </div>
          <div className="flex  gap-3 justify-end  text-white text-[2rem]">
            <spa>
              <BsFacebook />
            </spa>
            <spa>
              <BsInstagram />
            </spa>
            <spa>
              <BsTwitter />
            </spa>
            <spa>
              <BsYoutube />
            </spa>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
