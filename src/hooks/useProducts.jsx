import { baseURL } from "../utilities/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProducts, fetchedProducts, fetchFailed } from "../ReduxStore/productsSlice";

/**
 *  Fetch products and store them in redux state.
 *  @returns {Object} { data, isLoading, isError }
 *   @example
 *   const { data, isLoading, isError } = useProducts();
 */
export default function useProducts() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.products);

  //prevent constant reloading, also a means of storing for search component.
  useEffect(() => {
    if (data.length === 0) {
      const getProducts = async () => {
        try {
          dispatch(fetchingProducts());
          const res = await fetch(baseURL);
          const data = await res.json();
          dispatch(fetchedProducts(data));
        } catch {
          dispatch(fetchFailed());
        }
      };
      getProducts();
    }
  }, [dispatch, data]);

  return { data, isLoading, isError };
}
