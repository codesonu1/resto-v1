import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterItems } from "../../store/Product/product.thunk";

const Items = (props) => {
  const param = useParams();
  const _id = param._id;
  console.log(_id);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  dispatch(filterItems({ _id, setItems, setLoading }));

  console.log(items);

  const { item } = props;
  const [searchName, setSearchName] = useState("");

  return (
    <div>
      {item.length === 0 ? (
        <img src="/Loading_icons.gif" alt="" />
      ) : (
        <div>
          <input
            type="search"
            placeholder={`Search Food `}
            onChange={(e) => setSearchName(e.target.value)}
            name="search"
            className="w-full  border py-2 rounded-md placeholder:px-2 shadow-xl  "
          />

          {item.map((item, i) => {
            return (
              <div>
                <p
                  className="py-2 capitalize font-[500] text-[#F27E18] text-center  text-[1.2rem] "
                  style={{ fontFamily: "Helvetica" }}
                  id={`${item.name}`}
                >
                  {item.name}
                </p>

                {item.items
                  .filter((value) => {
                    if (searchName === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchName.toLocaleLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((item, i) => {
                    return (
                      <div className="border  my-2 px-2">
                        <div className="flex gap-3 my-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="border border-1 rounded-full w-[60px] h-[60px]"
                          />
                          <p className="underline pt-[1rem] capitalize">
                            {item.name}
                          </p>
                        </div>
                        <p className="capitalize opacity-60">
                          Special Cheesy Sauce, Tomato Sauce, Mozzarella Cheese
                          & Mixed Vegetable
                        </p>
                        <p className="text-[#F27E18] font-serif py-3">
                          Rs. {item.price}.00
                        </p>
                        <div className="flex gap-2 py-2">
                          <p>
                            {item.discount.length === "0" ||
                            item.discount.length === 0 ? (
                              <p className="uppercase opacity-30 ">
                                no discount{" "}
                              </p>
                            ) : (
                              <p className="border bg-[red] text-[white] uppercase  font-[700] px-1 rounded-[2px] mt-1">
                                discount-{item.discount}%
                              </p>
                            )}
                          </p>
                          <p className="border  px-3 py-1 uppercase font-[400] border-[#094be3] text-[#094be3] rounded-[4px] hover:bg-[#F27E18] hover:text-[white] hover:border-[white]">
                            Add to Cart
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Items;
