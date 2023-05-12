import React, { useState } from "react";
import "../../index.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import {
  getCategorys,
  getProductById,
} from "../../store/Product/product.thunk";
import Category from "./category";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const param = useParams();
  const _id = param._id;
  const res_id = param._id;
  console.log(param._id);
  const dispatch = useDispatch();

  dispatch(getProductById({ _id, setLoading, setProduct }));
  dispatch(getCategorys({ res_id, setCategory }));
  return (
    <div>
      <div className="product-background-image">
        <Container>
          {[product].map((item, i) => {
            return (
              <div className="flex  text-[white]">
                <div className="pt-[2rem] flex gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] h-[200px] mt-[2.5rem]"
                  />
                  <div className="mt-[2rem]">
                    <div className="grid grid-flow-row grid-cols-2">
                      <div>
                        <p className="text-[1.8rem] font-serif capitalize">
                          {item.name}
                        </p>
                        <p className="capitalize text-[0.8rem]">
                          {item.location}
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-end gap-2">
                          <AiOutlineClockCircle />
                          <p>opening</p>
                          <p className="text-[0.8rem]">
                            {item.opening} - {item.closing}
                          </p>
                        </div>
                        <div className="flex justify-end gap-3">
                          <MdDeliveryDining />
                          <p>{item.delivery_time}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-[1rem]">
                      <p className="px-2">rating</p> {" | "}
                      <p className="px-2">{[item.cusinis]}</p>
                    </div>

                    <p
                      className="justify-content-center py-2 front-[400]"
                      style={{ fontFamily: "Poppins,sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <div>
        <Category data={category} loading={loading} />
      </div>
    </div>
  );
};

export default ProductDetails;
