import { useProductStore } from "@/store/ProductStore";
import { ProductsResponse } from "@/types/Types";
import { useQuery } from "react-query";

export const useGetProducts = (keyword: string) => {
  return useQuery(
    ["products", keyword],
    async ({ signal }) => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${keyword}`,
          {
            signal,
          }
        );
        const data: ProductsResponse = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: (res) => {
        useProductStore.setState({ products: res?.products });
      },
    }
  );
};
