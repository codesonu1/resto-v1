import React from "react";

const PopularDises = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row py-5">
        <p className="text-[1.2rem]  ">Popular Dises</p>{" "}
        <p className=" text-end   uppercase underline">view more</p>
      </div>

      <div className="grid grid-cols-4 grid-flow-row gap-3">
        {populardises.slice(0, 4).map((item, i) => {
          return (
            <div
              key={i}
              className="border h-full w-full rounded-[5px] border-[black] "
            >
              <div className="flex justify-center ">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" w-full h-full "
                />
              </div>
              <p className="absolute bottom-[33rem] mx-3 border bg-[white] border-[#F27E18] rounded-full w-[50px] h-[50px] p-3">
                {item.discount + "%"}
              </p>
              <p className="  capitalize  text-[1.3rem] font-[500]">
                {item.name}
              </p>
              <p className="uppercase text-[1rem] opacity-40">{item.type}</p>
              <p className="text-[#F27E18] text-[1.4rem] font-bold">
                Rs.{item.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const populardises = [
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    type: "excluive",
    discount: "13",
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    type: "excluive",
    discount: "13",
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    type: "excluive",
    discount: "13",
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    type: "excluive",
    discount: "13",
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    type: "excluive",
    discount: "13",
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    type: "excluive",
    discount: "13",
    price: 230,
  },
];

export default PopularDises;
