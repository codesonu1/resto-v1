import { useEffect } from "react";
import { api } from "../../utils/api";
import {
  productData,
  productError,
  productLoading,
  productSuccess,
} from "./product.action";

export const getAllProduct =
  ({ setProduct, setLoading }) =>
  async (dispatch) => {
    try {
      dispatch(productLoading());
      useEffect(() => {
        async function fetch() {
          const data = await api.get("/product");
          dispatch(productSuccess);
          setLoading(false);
          setProduct(data.data.data);
          dispatch(productData(data));
          console.log(data);
        }
        fetch();
      }, []);
    } catch (error) {
      dispatch(productError(error));
    }
  };

export const getProductByI =
  ({ _id, setProduct, setIsLoading }) =>
  async (dispatch) => {
    try {
      useEffect(() => {
        async function fetch() {
          dispatch(productLoading());
          const data = await api.get(`product/${_id}`);
          dispatch(productSuccess);
          setProduct(data.data.data);
          setIsLoading(false);
          console.log(data.data.data);
        }
        fetch();
      }, []);
    } catch (error) {
      dispatch(productError(error));
    }
  };
