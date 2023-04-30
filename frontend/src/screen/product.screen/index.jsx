import React, { useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { TfiShare } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { getProductByI } from "../../store/Product/product.thunk";
import Tooltip from "@mui/material/Tooltip";
import { Container } from "@mui/material";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date().getHours();

  const [product, setProduct] = useState([]);
  const param = useParams();
  const _id = param._id;

  const dispatch = useDispatch();
  dispatch(getProductByI({ _id, setProduct, setIsLoading }));

  return (
    <div className="bg-[#FCF8F3] h-full">
      <Container>
        <div className="flex gap-4">
          <div>item name</div>
          <div>
            <div className="hover:text-[#F4902F]">
              <TfiShare className="text-[2rem]  text-[#d6af3a] hover:border hover:rounded-full hover:bg-[#F4902F] p-[1.3rem] w-[60px] h-[60px] hover:text-white " />
              <p className="px-3 capitalize text-[1.3rem] "> all resturnt</p>
            </div>

            {isLoading && (
              <div className="flex justify-center">
                <img src="/Loading_icon.gif" alt="" />
              </div>
            )}
            {[product].map((item) => (
              <div
                key={item._id}
                className="grid grid-flow-row grid-cols-3 gap-3  "
              >
                {item.items?.map((item) => {
                  return (
                    <div>
                      <div className="hover:border hover:bg-[white] hover:shadow-md border">
                        <img
                          src={item.image}
                          alt={item.restruant_name}
                          className="w-[200px] h-[200px]"
                        />

                        <p className="capitalize px-2 text-[1rem] tracking-wide pt-2 font-[400]">
                          {item.restruant_name}
                        </p>
                        <p className="capitalize px-2 py-2">
                          {item.restruant_location}
                        </p>
                        <p className="capitalize px-2 text-[0.7rem] pt-2">
                          rating
                        </p>
                        <p className="capitalize px-2 py-2">
                          {item.restruant_tag}
                        </p>
                        <div className="flex gap-2">
                          <AiOutlineClockCircle className="my-1" />
                          <p
                            style={{
                              color:
                                date < item.restruant_open ? "green" : "red",
                            }}
                          >
                            {date < item.restruant_open
                              ? "open"
                              : date < item.restruant_closed
                              ? "open"
                              : "closed"}
                          </p>
                          <p className="text-[0.8rem]">
                            {item.restruant_open} AM -{item.restruant_closed} PM
                          </p>
                        </div>
                        <hr className="my-1" />
                        <div className="flex">
                          <MdDeliveryDining className="text-[2rem] text-[gray]" />
                          <p className="p-2">{item.delivery_time} mins</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
