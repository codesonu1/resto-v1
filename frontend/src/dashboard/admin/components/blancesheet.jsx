import React from "react";

const BlanceSheet = () => {
  return (
    <div className=" flex justify-center m-[3rem]">
      <div className="border border-[#F27E18] w-full h-full bg-[#FDF0E7]">
        <p className="py-2 text-center text-[1.2rem] font-[500]">
          Blance Summery
        </p>
        <div className="ml-[3rem]">
          <p className="text-[1.2rem]"> Total Blance</p>
          <p className="text-[2rem] font-bold">Rs. 1200.00</p>
        </div>
      </div>
    </div>
  );
};

export default BlanceSheet;
