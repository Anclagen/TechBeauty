import { updateHead } from "../../utilities/updateHead";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SuccessPageWrapper, OrderNumber, ReturnButton, Table, OrderSummaryLink } from "./styles";
import { useEffect } from "react";
import { clearCart } from "../../context/cartSlice";
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

function SuccessPage() {
  updateHead("Checkout Success", "Your order has been successfully placed");
  const { products, total } = useSelector((state) => state.cart);
  const [order, setOrder] = useState({ products: [], orderNumber: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      const orderNumber = Date.now().toString(36) + Math.random().toString(36).substring(2);
      const details = { products, orderNumber };
      const orderHistory = getLocalHistory();
      orderHistory.push(details);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
      dispatch(clearCart());
      setOrder(details);
    }
  }, [dispatch, products]);

  if (products.length === 0 && order.products.length === 0) {
    return (
      <SuccessPageWrapper>
        <h1 id="main">No Order Found</h1>
        <ReturnButton to="/">Return To Store</ReturnButton>
      </SuccessPageWrapper>
    );
  }

  return (
    <SuccessPageWrapper>
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
                <OrderSummaryLink>{product.title}</OrderSummaryLink>
              </td>
              <td>{product.quantity}</td>
              <td>{product.discountedPrice}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>{total}</td>
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
