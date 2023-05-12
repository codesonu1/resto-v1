import { useEffect } from "react";
import { reviewLoading, reviewSuccess, reviewError } from "./Review.action";
import { api } from "../../utils/api";

export const getReview =
  ({ setReview, setLoading }) =>
  (dispatch) => {
    try {
      dispatch(reviewLoading());
      useEffect(() => {
        async function fetch() {
          const data = await api.get("/review");
          dispatch(reviewSuccess());
          setReview(data.data.review.data);
          setLoading(false);
        }
        fetch();
      }, []);
    } catch (error) {
      dispatch(reviewError(error));
      console.log(error);
    }
  };
