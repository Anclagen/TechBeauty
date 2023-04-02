import Head from "../../components/Head";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SuccessPageWrapper, OrderNumber, ReturnButton, Table, OrderSummaryLink } from "./styles";
import { useEffect } from "react";
import { clearCart } from "../../ReduxStore/cartSlice";
const initialState = [];

// Check local for a cart
const getLocalHistory = () => {
  const history = localStorage.getItem("orderHistory");
  if (history) {
    return JSON.parse(history);
  } else {
    return initialState;
  }
};

// Returns the checkout success page
function SuccessPage() {
  const { products, total } = useSelector((state) => state.cart);
  const [order, setOrder] = useState({ products: [], orderNumber: "", total: 0 });
  const dispatch = useDispatch();

  // when the page loads, check if the cart is empty and if not, save the order to local storage, clear the cart and set current order for rendering.
  useEffect(() => {
    if (products.length > 0) {
      const orderNumber = Date.now().toString(36) + Math.random().toString(36).substring(2);
      const details = { products, orderNumber, total };
      const orderHistory = getLocalHistory();
      orderHistory.push(details);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
      dispatch(clearCart());
      setOrder(details);
    }
  }, [dispatch, products, total]);

  // if the cart is empty, show no order found
  if (products.length === 0 && order.products.length === 0) {
    return (
      <SuccessPageWrapper>
        <Head title="No Order Found" description="No order found" />
        <h1 id="main">No Order Found</h1>
        <ReturnButton to="/">Return To Store</ReturnButton>
      </SuccessPageWrapper>
    );
  }

  // if the cart is not empty, show the order summary
  return (
    <SuccessPageWrapper>
      <Head title="Order Successful" description="Order successful" />
      <h1 id="main">Order Successful</h1>
      <span>
        Order ID: <OrderNumber>{order.orderNumber}</OrderNumber>
      </span>
      <Table>
        <thead>
          <tr>
            <th>Product Description:</th>
            <th>Quantity:</th>
            <th>Price:</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product.id}>
              <td>
                <OrderSummaryLink to={`/product/${product.id}`}>{product.title}</OrderSummaryLink>
              </td>
              <td>{product.quantity}</td>
              <td>{(product.discountedPrice * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>NOK {order.total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </Table>
      <div>
        <ReturnButton to="/">Return To Store</ReturnButton>
      </div>
    </SuccessPageWrapper>
  );
}

export default SuccessPage;
