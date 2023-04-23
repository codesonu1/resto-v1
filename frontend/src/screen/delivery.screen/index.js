import { Container } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const index = () => {
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
          <div className="grid grid-cols-4 grid-flow-row my-5 gap-3">
            <div className="border boredr-[1px] shadow-lg p-3 w-full h-full">
              <section>
                <img
                  src="/assets/Biratnagar.jpg"
                  className="rounded-[4px]"
                  alt=""
                ></img>
                <p className="text-2 uppercase text-center py-3 font-semibold">
                  Biratnagar
                </p>
              </section>
            </div>
            <div className="border boredr-[1px] shadow-lg p-3">
              <img
                src="/assets/kathmandu.jpg"
                className="rounded-[4px]"
                alt=""
              ></img>
              <p className="text-2 uppercase text-center py-3 font-semibold">
                Kathmandu
              </p>
            </div>
            <div className="border boredr-[1px] shadow-lg p-3">
              <img
                src="/assets/Bhaktapur.jpg"
                className="rounded-[4px]"
                alt=""
              ></img>
              <p className="text-2 uppercase text-center py-3 font-semibold">
                Bhaktapur
              </p>
            </div>
            <div className="border boredr-[1px] shadow-lg p-3">
              <img
                src="/assets/Itahari.jpg"
                className="rounded-[4px]"
                alt=""
              ></img>
              <p className="text-2 uppercase text-center py-3 font-semibold">
                Itahari
              </p>
            </div>
            <div className="border boredr-[1px] shadow-lg p-3">
              <img
                src="/assets/Lumbini.jpg"
                className="rounded-[4px]"
                alt=""
              ></img>
              <p className="text-2 uppercase text-center py-3 font-semibold">
                Lumbini
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default index;
