import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getReview } from "../../store/Review/Review.thunk";

const Review = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  dispatch(getReview({ setReview, setLoading }));

  return (
    <div>
      {loading === true ? (
        <img src="/Loading_icon.gif" className="w-[100px] h-[100px]" alt="" />
      ) : (
        <div>
          {" "}
          {[
            review.slice(0, 3).map((item, i) => {
              return (
                <div key={i}>
                  <p className="capitalize font-semibold text-[#F27E18] ">
                    Rating: {item.rating}
                  </p>
                  <p className="capitalize font-[400] py-2 ">{item.name}</p>
                  <p className="capitalize text-[gray] opacity-60 py-2">
                    {item.comments}
                  </p>

                  <hr className="my-2" />
                </div>
              );
            }),
          ]}{" "}
        </div>
      )}

      <p className="text-end uppercase">pagenation</p>
      <div>
        <p className="text-[1.3rem] font-semibold capitalize">
          write comment.....
        </p>
        <div className="flex">
          <p className="text-[2rem]  flex  mt-[2rem]">
            <AiOutlineStar className="hover:text-[#F27E18]" />
            <AiOutlineStar className="hover:text-[#F27E18]" />
            <AiOutlineStar className="hover:text-[#F27E18]" />
            <AiOutlineStar className="hover:text-[#F27E18]" />
            <AiOutlineStar className="hover:text-[#F27E18]" />
          </p>
          <p
            className="border bg-[#D7D3CB] h-[30px]  px-3 mt-[2rem] ml-[2rem] cursor-pointer "
            style={{
              borderTopLeftRadius: "40px",
              borderBottomLeftRadius: "40px",
            }}
          >
            click to Rate
          </p>
        </div>
        <div className="my-3">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Name"
            className="border w-full py-2 placeholder:px-2   bg-[#FCF8F3]"
          />
          <textarea
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Enter a Comments"
            className="w-full border my-2  placeholder:px-2 py-3 bg-[#FCF8F3]"
          />
          <p className="border bg-[#F27E18] py-2 px-3 uppercase text-[white] w-[120px] text-center rounded-[5px] cursor-pointer">
            Submit
          </p>
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    rating: "four",
    name: "sonu kumar thakur",
    comments:
      "worst food. pizza ho ki pancake. burger smelled like decayed meat.",
  },
  {
    rating: "three",
    name: "david kumar yadav",
    comments:
      "worst food. pizza ho ki pancake. burger smelled like decayed meat.",
  },
  {
    rating: "four.two",
    name: "anisha  rai",
    comments:
      "worst food. pizza ho ki pancake. burger smelled like decayed meat.",
  },
];

export default Review;
