import { Container } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { Helmet } from "react-helmet";

import { logout } from "../../store/Auth/auth.thunk";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [chage, setChange] = useState(false);
  const open = () => setChange(true);
  const close = () => setChange(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function userlogout() {
    dispatch(logout({ navigate }));
  }

  return (
    <div className="bg-[#F27E18]">
      <Helmet>
        <title>
          {document.location.pathname.replace("/", "").toUpperCase()}
        </title>
      </Helmet>
      <div className="grid grid-cols-3 grid-flow-row py-3 px-3">
        <div className="flex gap-6   ">
          <div>
            <img
              src="/logo192.jpg"
              alt=""
              className="w-[80px] h-[80px] rounded-full "
            />
          </div>
          <div className="text-[white] text-[1.5rem] capitalize py-4">
            resto web app v1
          </div>
          <div
            className="text-[2.3rem] my-4 mx-2 text-white  capitalize  hover:text-black"
            onClick={chage === false ? open : close}
          >
            {chage === true ? <AiOutlineArrowLeft /> : <FaBars />}
          </div>
        </div>
        <div className="flex gap-6 justify-center border lg:w-[500px] ml-[4rem] bg-[#F38C31]  rounded-[6px] ">
          <input
            type="search"
            placeholder="SEARCH FOR FOOD"
            className="h-[50px] border border-[gray] w-[400px] my-3"
          />
          <BsSearch className="mt-5 text-white text-[2rem]" />
        </div>
        <div className="flex gap-6 justify-end mx-[5rem]">
          <img
            src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
          <p className="py-5 text-[white] text-[1.3rem]">role</p>
          <CiLogout
            className="text-[2rem] my-[1.4rem] text-[white] font-[bold]"
            onClick={userlogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
