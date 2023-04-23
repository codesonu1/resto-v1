import React from "react";
import Category from "./category";
import PopularDises from "./populardises";
import RecentOrder from "./recentorder";
import BlanceSheet from "./blancesheet";

const Product = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row">
        <div>
          <Category />
          <PopularDises />
          <RecentOrder />
        </div>
        <div>
          <BlanceSheet />
        </div>
      </div>
      <hr className="my-3"></hr>
      <p className="text-center">
        Copyright © Designed & Developed by Sonu {year}
      </p>
    </div>
  );
};

export default Product;
