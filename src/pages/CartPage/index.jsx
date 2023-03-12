import { Link } from "react-router-dom";
import { updateHead } from "../../utilities/updateHead";
import { Wrapper, CartItemImage, CartItemContainer, CartItemImageContainer, CartItemDetailsContainer, CartItemTitle, RemoveButton, CartGrid, QuantityButton } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from "../../context/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  updateHead("Your Cart", "Your cart page, showing all items you have added.");

  return (
    <Wrapper>
      <h1>Your Cart</h1>
      <CartGrid>
        <section>
          <h2>Products</h2>
          {cart.products.map((item) => (
            <CartItemContainer key={item.id}>
              <CartItemImageContainer>
                <CartItemImage src={item.imageUrl} alt={item.title} />
              </CartItemImageContainer>
              <CartItemDetailsContainer>
                <CartItemTitle>{item.title}</CartItemTitle>
                <p>Price: {item.discountedPrice.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  <QuantityButton
                    onClick={() => {
                      dispatch(decreaseQuantity({ quantity: 1, product: item }));
                    }}
                  >
                    -
                  </QuantityButton>
                  <span> {item.quantity} </span>
                  <QuantityButton
                    onClick={() => {
                      dispatch(addToCart({ quantity: 1, product: item }));
                    }}
                  >
                    +
                  </QuantityButton>
                  <RemoveButton onClick={() => dispatch(removeFromCart({ product: item }))}>remove</RemoveButton>
                </p>
              </CartItemDetailsContainer>
            </CartItemContainer>
          ))}
          <button onClick={() => dispatch(clearCart())}>Empty Cart</button>
        </section>
        <section>
          <h2>Checkout Summary</h2>
          <div>Total Price:{cart.total.toFixed(2)}</div>
          <Link to="../success">Place Order</Link>
        </section>
      </CartGrid>
    </Wrapper>
  );
}

export default CartPage;
/*
<button onClick={() => dispatch(removeFromCart({ product: data }))}>remove</button>
<button onClick={() => dispatch(decreaseQuantity({ quantity: 1, product: data }))}>decrease</button>
<button onClick={() => dispatch(clearCart())}>clear</button>
*/
