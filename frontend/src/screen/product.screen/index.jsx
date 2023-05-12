import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { TfiShare } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { filterProductByI } from "../../store/Product/product.thunk";
import { Container } from "@mui/material";
import Cuisines from "./cuisines";
// import Tooltip from "@mui/material/Tooltip";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date().getHours();
  console.log(date);

  const [product, setProduct] = useState([]);
  console.log(product);
  const param = useParams();
  const _id = param._id;

  const dispatch = useDispatch();
  dispatch(filterProductByI({ _id, setProduct, setIsLoading }));

  return (
    <div className="bg-[#FCF8F3] h-full">
      <Link to="/delivery">
        <p className="text-[#F4902F] uppercase m-2 flex">back</p>
      </Link>
      <Container>
        <div className="flex gap-4">
          <div>
            <Cuisines />
          </div>
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

            <div className="grid grid-flow-row grid-cols-3 gap-3  ">
              {product.map((item) => {
                return (
                  <div>
                    <div className="hover:border hover:bg-[white] hover:shadow-md border">
                      {item.image.length === 0 ? (
                        <img src="/Loading_icons.gif" alt="" />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-[200px]"
                        />
                      )}

                      <Link to={`/product/${item.name}/${item._id}`}>
                        <p className="capitalize px-2 text-[1rem] tracking-wide pt-2 font-[400]">
                          {item.name}
                        </p>
                      </Link>
                      <p className="capitalize px-2 py-2">{item.location}</p>

                      <p className="capitalize px-2 py-2">{item.cusinis}</p>
                      <div className="flex gap-2">
                        <AiOutlineClockCircle className="m-1 " />
                        <p>
                          {date < item.opening
                            ? date > item.opening
                            : "opening"}
                        </p>
                        <p className="text-[0.8rem]">
                          {item.opening} - {item.closing}
                        </p>
                      </div>
                      <hr className="my-1" />
                      <div className="flex justify-center">
                        <MdDeliveryDining className="text-[2rem] text-[gray]" />
                        <p className="p-2">{item.delivery_time} mins</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
