import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../context/cartSlice";

/**
 * Maintains the cart state in sync with the local storage across tabs.
 */
export const useLocalStorageListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        // get new cart from local storage
        const newCart = JSON.parse(event.newValue);
        // update cart in redux state
        dispatch(updateCart(newCart));
      }
    };

    // add event listener for storage change
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);
};
