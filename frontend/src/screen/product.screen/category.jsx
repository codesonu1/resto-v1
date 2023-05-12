import { Container } from "@mui/material";
import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./items";
import Review from "../authorize.screen/review";

const Category = ({ data, loading }) => {
  const [isShow, setIsShow] = useState(false);

  const menuCick = () => setIsShow(<Items item={data} />);

  const reviewClick = () => setIsShow(<Review />);

  return (
    <div className="bg-[#FCF8F3]">
      <div className="py-3">
        <div className="grid grid-cols-3 grid-flow-row gap-3 my-[2rem]">
          <div>
            <div className="flex gap-2 justify-center">
              <BiCategoryAlt className="my-5 text-[2rem] text-[#F27E18]" />
              <p className=" capitalize text-2xl font-[Poppins,sans-serif] font-[400]  my-3 py-2">
                category
              </p>
            </div>
            {data.map((item) => {
              return (
                <div>
                  <div>
                    {" "}
                    <a href={`#${item.name}`}>
                      {" "}
                      <p
                        className="text-center my-1 border bg-[#F27E18] uppercase px-2 py-2 cursor-pointer   transition-[width]   text-white font-bold w-[300px] rounded-[4px] mx-[2rem] hover:w-[500px]"
                        style={{ transitionDuration: "2s" }}
                      >
                        {item.name}
                      </p>
                    </a>
                    <hr className="py-2  my-2 w-auto" />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="grid grid-flow-row grid-cols-2">
              <div>
                <p
                  className="text-center capitalize opacity-60 text-[1.2rem] hover:text-[#F27E18] my-2 cursor-pointer "
                  onClick={menuCick}
                >
                  menu
                </p>
              </div>
              <div>
                <p
                  className="text-center capitalize opacity-60 text-[1.2rem] hover:text-[#F27E18] my-2 cursor-pointer"
                  onClick={reviewClick}
                >
                  review
                </p>
              </div>
            </div>
            <Scrollbars style={{ height: 650 }}>
              <div className="border shadow-lg rounded-md p-[2rem]    bg-[white]">
                {isShow === false ? <Items item={data} /> : isShow}
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
