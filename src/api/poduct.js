import { toast } from "react-toastify";
import instance from "./instance"


export const getProductsApi = async () => {
  try {
    const res = await instance.get("/products");
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch products");
  }
}


export const getProductsByFilterApi = async (params) => {
  try {
    const res = await instance.get(`/products${params}`);
    console.log(instance);
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch products");

  }
}

export const getProductById = async (id) => {
  try {
    const res = await instance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch product by Id!");
  }
}