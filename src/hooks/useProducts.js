import { useQuery } from "@tanstack/react-query"
import { getProductById, getProductsApi, getProductsByFilterApi } from "../api"


export const useProducts = () => {
  return useQuery({
    queryFn: getProductsApi,
    queryKey: ["products"]
  })
}

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id
  })
}

export const useProductByFilter = (params) => {
  return useQuery({
    queryKey: ["products-filter", params],
    queryFn: () => getProductsByFilterApi(params),
    enabled: !!params
  })
}