import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TbBrandPagekit } from "react-icons/tb";
import { RxDash } from "react-icons/rx";
import { Scrollbars } from "react-custom-scrollbars-2";
import Category from "./category";
import Product from "./product";

const Sidenav = () => {
  return (
    <>
      <div className="flex">
        <Scrollbars style={{ width: 370, height: 850 }}>
          <div className=" absolute  w-[300px] h-full ">
            <p className="text-[#F27E18]  uppercase  p-2">main menu</p>
            <p className=" flex gap-2  p-3 mx-3  my-2  text-[white] rounded-lg border bg-[#F27E18] ">
              {" "}
              <BsFillGrid3X3GapFill className="m-2" />
              <span className="    font-[700] text-[1.3rem]  capitalize">
                Dashboard
              </span>
            </p>
            {links.map((item, i) => {
              return (
                <div>
                  {item.dashboard.map((item, i) => {
                    return (
                      <div className="flex hover:text-[#F27E18] cursor-pointer">
                        <p>
                          <RxDash className=" text-[2rem] my-1" />
                        </p>

                        <p className=" capitalize px-3 py-2">{item.name}</p>
                      </div>
                    );
                  })}
                  <p className=" flex gap-2  p-3 mx-3  my-2  text-[white] rounded-lg border bg-[#F27E18] ">
                    {" "}
                    <MdOutlineRestaurantMenu className="m-2 t" />
                    <span className="    font-[700] text-[1.3rem]  capitalize">
                      restaturant
                    </span>
                  </p>
                  {item.restaturant.map((item) => {
                    return (
                      <div className="flex hover:text-[#F27E18] cursor-pointer">
                        <p>
                          <RxDash className=" text-[2rem] my-1" />
                        </p>
                        <p className=" capitalize px-3 py-2">{item.name}</p>
                      </div>
                    );
                  })}
                  <p className=" flex gap-2  p-3 mx-3  my-2  text-[white] rounded-lg border bg-[#F27E18] ">
                    {" "}
                    <TbBrandPagekit className="m-2" />
                    <span className="    font-[700] text-[1.3rem]  capitalize">
                      pages
                    </span>
                  </p>
                  {item.pages.map((item, i) => {
                    return (
                      <div className="flex hover:text-[#F27E18] cursor-pointer">
                        <p>
                          <RxDash className=" text-[2rem] my-1" />
                        </p>
                        <p className=" capitalize px-3 py-2">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Scrollbars>
        <div className="  w-full h-full top-[3rem] ml-[4rem] ">
          <Product />
        </div>
      </div>
    </>
  );
};

const links = [
  {
    dashboard: [
      {
        name: "dashboard",
      },
      {
        name: "food order",
      },
      {
        name: "favourite menu",
      },
      {
        name: "message",
      },
      {
        name: "order history",
      },
      {
        name: "notification",
      },
      {
        name: "bill",
      },
      {
        name: "setting",
      },
    ],

    restaturant: [
      {
        name: "restaturant",
      },
      {
        name: "menu",
      },
      {
        name: "order",
      },
      {
        name: "review",
      },
    ],
    pages: [
      {
        name: "categories",
      },
      {
        name: "menu",
      },
      {
        name: "today deal",
      },
      {
        name: "restaturant",
      },
    ],
  },
];

export default Sidenav;
