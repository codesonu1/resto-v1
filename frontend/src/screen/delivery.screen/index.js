import { Container } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../store/Product/product.thunk";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  dispatch(getAllProduct({ setProduct, setLoading }));
  console.log(product);

  return (
    <>
      <div>
        <Helmet>
          <title>
            {document.location.pathname.replace("/", "").toUpperCase()}
          </title>
        </Helmet>
        <Container>
          <p className="text-[white] bg-[#F2865B] py-3 text-start px-2  h-auto font-bold">
            Select Delivery Loaction
          </p>
          {loading && <img src="/98891-insider-loading.gif" alt="" />}
          <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-flow-row my-5 gap-3">
            {product.map((item, i) => {
              return (
                <div>
                  <div className="border boredr-[1px] shadow-lg p-3 w-full h-full">
                    <section>
                      <img
                        src={item.image}
                        className="rounded-[4px] h-[200px] w-full"
                        alt={item.location}
                        tooltip="hello"
                      ></img>
                      <hr className="my-2" />
                      <Link to={`${item._id}`}>
                        <p className="text-2 uppercase text-center py-3 font-semibold cursor-pointer">
                          {item.location}
                        </p>
                      </Link>
                    </section>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Index;
