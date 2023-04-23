import React from "react";

const RecentOrder = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row py-5">
        <p className="text-[1.2rem]  ">Recent Order</p>{" "}
        <p className=" text-end   uppercase underline">view more</p>
      </div>

      <div className="grid grid-cols-4 grid-flow-row gap-3">
        {recentOrder.slice(0, 4).map((item, i) => {
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
              <p className="  capitalize  text-[1.3rem] font-[500]">
                {item.name}
              </p>
              <p className="text-[#F27E18] text-[1.4rem] font-bold">
                Rs.{item.price}
              </p>
              <div className="flex justify-center gap-4 opacity-40 text-[1rem]">
                <p>{item.distance} KM </p>
                <p>{item.time} MINS </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const recentOrder = [
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    distance: 23,
    time: 4,
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    distance: 23,
    time: 4,
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    distance: 23,
    time: 4,
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    distance: 23,
    time: 4,
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    distance: 23,
    time: 4,
    price: 230,
  },
  {
    image: "/assets/burger.jpg",
    name: "fish burger",
    distance: 23,
    time: 4,
    price: 230,
  },
];

export default RecentOrder;
