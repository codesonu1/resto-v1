import React from "react";

const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row py-5">
        <p className="text-[1.2rem]  ">Category</p>{" "}
        <p className=" text-end   uppercase underline">view more</p>
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-3">
        {category.slice(0, 4).map((item, i) => {
          return (
            <div
              key={i}
              className="border h-full w-full rounded-[10px] border-[black] "
            >
              <div className="flex justify-center my-2">
                {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100px] h-[100px] rounded-full "
                />
              </div>

              <p className="text-center capitalize py-3 text-[1.3rem] font-[500]">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const category = [
  {
    image: "/assets/pizza.jpg",
    name: "piza",
  },
  {
    image: "/assets/pizza.jpg",
    name: "piza",
  },
  {
    image: "/assets/pizza.jpg",
    name: "piza",
  },
  {
    image: "/assets/pizza.jpg",
    name: "piza",
  },
  {
    image: "/assets/pizza.jpg",
    name: "piza",
  },
  {
    image: "/assets/pizza.jpg",
    name: "piza",
  },
];

export default Category;
