import React from "react"
import { CartIcon, CartImage, CartItemsList, CartLink, CartItemListImage } from "./styles"
import cartImage from "../../../assets/shopping_cart.png"
import { useSelector } from "react-redux";

export default function Cart(){
  const cart = useSelector((state) => state.cart);

  return (
  <CartIcon>
    <CartLink to="/cart" total={cart.totalItems}>
      <CartImage src={cartImage}/> Cart
    </CartLink>
    <CartItemsList>
      {cart.products.length > 0 ? cart.products.map(item => <div key={item.id}><p><CartItemListImage src={item.imageUrl}/>{item.title}, {item.quantity}</p></div>) : "Your Cart Is Empty."}
      {cart.products.length > 0 ? <p>Total: kr {cart.total.toFixed(2)}</p> : ""}
    </CartItemsList>
  </CartIcon>)
}