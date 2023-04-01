import { useSelector, useDispatch } from "react-redux";
import Head from "../../components/Head";
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
  ClearCartButton,
} from "./styles";
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from "../../context/cartSlice";

/**
 * Returns the cart page
 * @returns {JSX.Element} Cart page
 */
function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // if the cart is empty, show the empty cart page
  if (cart.products.length === 0) {
    return (
      <EmptyCart>
        <Head title="Empty Cart" description="Your cart page, showing all items you have added." />
        <h1 id="main">Empty Cart</h1>
        <p>Nothing in your cart.</p>
        <ReturnButton to="/">Return to Store</ReturnButton>
      </EmptyCart>
    );
  }

  // if the cart is not empty, show the cart page
  return (
    <Wrapper>
      <Head title="Your Cart" description="Your cart page, showing all items you have added." />
      <h1 id="main">Your Cart</h1>
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
                <p>Unit Price: NOK {item.discountedPrice.toFixed(2)}</p>
                <p>Total Price: NOK {(item.discountedPrice * item.quantity).toFixed(2)}</p>
                <p>
                  Quantity:
                  <QuantityButton
                    onClick={() => {
                      dispatch(addToCart({ quantity: 1, product: item }));
                    }}
                  >
                    +
                  </QuantityButton>
                  <span> {item.quantity} </span>
                  <QuantityButton
                    onClick={() => {
                      dispatch(decreaseQuantity({ quantity: 1, product: item }));
                    }}
                  >
                    -
                  </QuantityButton>
                </p>
                <RemoveButton onClick={() => dispatch(removeFromCart({ product: item }))}>remove</RemoveButton>
              </CartItemDetailsContainer>
            </CartItemContainer>
          ))}
          <ClearCartButton onClick={() => dispatch(clearCart())}>Empty Cart</ClearCartButton>
        </section>
        <CartCheckoutSection>
          <CartCheckoutDetails>
            <h2>Checkout Summary</h2>
            <p>Price: NOK {(cart.total / 1.25).toFixed(2)}</p>
            <p>VAT 25%: NOK {(cart.total - cart.total / 1.25).toFixed(2)} </p>
            <p>Delivery: Free.</p>

            <p>
              <b>Total Price: NOK {cart.total.toFixed(2)}</b>
            </p>
            <CartCheckoutButton to="../success">Place Order</CartCheckoutButton>
          </CartCheckoutDetails>
        </CartCheckoutSection>
      </CartGrid>
    </Wrapper>
  );
}

export default CartPage;
