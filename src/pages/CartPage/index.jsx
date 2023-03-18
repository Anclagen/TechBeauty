import { updateHead } from "../../utilities/updateHead";
import {
  Wrapper,
  CartItemImage,
  CartItemContainer,
  CartItemImageContainer,
  CartItemDetailsContainer,
  CartItemTitle,
  RemoveButton,
  CartGrid,
  QuantityButton,
  CartCheckoutSection,
  CartCheckoutDetails,
  CartCheckoutButton,
  EmptyCart,
  ReturnButton,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from "../../context/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  updateHead("Your Cart", "Your cart page, showing all items you have added.");
  if (cart.products.length === 0) {
    return (
      <EmptyCart>
        <h1>Empty Cart</h1>
        <p>Nothing in your cart.</p>
        <ReturnButton to="/">Return to Store</ReturnButton>
      </EmptyCart>
    );
  }

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
                <p>Quantity:</p>
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
        <CartCheckoutSection>
          <CartCheckoutDetails>
            <h2>Checkout Summary</h2>
            <p>Price: {(cart.total / 1.25).toFixed(2)}</p>
            <p>VAT 25%: {(cart.total - cart.total / 1.25).toFixed(2)} </p>
            <p>Delivery: Free.</p>

            <p>
              <b>Total Price: kr {cart.total.toFixed(2)}</b>
            </p>
            <CartCheckoutButton to="../success">Place Order</CartCheckoutButton>
          </CartCheckoutDetails>
        </CartCheckoutSection>
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
