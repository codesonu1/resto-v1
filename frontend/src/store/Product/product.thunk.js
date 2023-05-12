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
          const data = await api.get("/city");
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

export const filterProductByI =
  ({ _id, setProduct, setIsLoading }) =>
  async (dispatch) => {
    try {
      useEffect(() => {
        async function fetch() {
          dispatch(productLoading());
          const data = await api.get(`restraunt?city_id=${_id}`);
          console.log(data);
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

export const getProductById =
  ({ _id, setProduct, setLoading }) =>
  (dispatch) => {
    dispatch(productLoading());
    try {
      useEffect(() => {
        async function fetch() {
          const data = await api.get(`restraunt/${_id}`);
          dispatch(productSuccess());
          setProduct(data.data.data);
          setLoading(false);
        }
        fetch();
      }, []);
    } catch (error) {
      dispatch(productError(error));
    }
  };

export const getCategorys =
  ({ res_id, setCategory }) =>
  (dispatch) => {
    try {
      dispatch(productLoading());
      useEffect(() => {
        async function fetch() {
          const data = await api.get(`/categorys?res_id=${res_id}`);
          productSuccess();
          setCategory(data.data.data);
        }
        fetch();
      }, []);
    } catch (error) {
      dispatch(productError(error));
    }
  };

export const filterItems =
  ({ _id, setItems, setLoading }) =>
  (dispatch) => {
    try {
      dispatch(productLoading());
      useEffect(() => {
        async function fetch() {
          const data = await api.get(`/items/${_id}`);
          dispatch(productSuccess());
          console.log(data);
          setLoading(false);
          setItems(data.data.data);
        }
        fetch();
      }, []);
    } catch (error) {
      dispatch(productError(error));
    }
  };
