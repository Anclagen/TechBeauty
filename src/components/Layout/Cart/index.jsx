import React from "react";
import { CartIcon, CartImage, CartItemsList, CartLink, CartItemListImage } from "./styles";
import cartImage from "../../../assets/shopping_cart.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/**
 * Creates the cart icon for the nav bar and also has useEffect to update local storage on cart change.
 * @param {String} currentPage used for current page indicators
 */
export default function Cart() {
  //get cart
  const cart = useSelector((state) => state.cart);

  // update cart in local on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartIcon>
      <CartLink to="/cart" total={cart.totalItems}>
        <CartImage src={cartImage} alt="cart icon" />
      </CartLink>
      <CartItemsList>
        {cart.products.length > 0
          ? cart.products.map((item) => (
              <div key={item.id}>
                <p>
                  <CartItemListImage src={item.imageUrl} alt={item.title} />
                  {item.title}, {item.quantity}
                </p>
              </div>
            ))
          : "Your Cart Is Empty."}
        {cart.products.length > 0 ? <p>Total: NOK {cart.total.toFixed(2)}</p> : ""}
      </CartItemsList>
    </CartIcon>
  );
}
