import { Container } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="border-[1px] shadow-lg rounded-sm  ">
        <Container className="">
          <div className="flex gap-2">
            <img src="/logo192.jpg" alt=" " className="w-[100px] h-[100px]" />
            <p className="pt-[2.8rem] capitalize ">resto-V1</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
