import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/API";
import { updateHead } from "../../utilities/updateHead";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/cartSlice";
import {
  PageGrid,
  Wrapper,
  DetailsContainer,
  Divider,
  ImageContainer,
  ProductImage,
  ProductSaleBanner,
  Heading1,
  Heading2,
  RatingLink,
  ButtonAddCart,
  IconImage,
  CurrentPrice,
  PreviousPrice,
  PreviousPriceAmount,
  Popup,
} from "./styles";
import cartIcon from "../../assets/shopping_cart_add.png";
import { RatingStars } from "../../components/RatingStars";
import ProductPageLoader from "../../components/ProductPageLoader";

/**
 * Creates Products page
 * @returns {JSX.Element} Product page
 */
function ProductPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError } = useAPI(baseURL + params.id);
  const [inCart, setInCart] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [popups, setPopups] = useState([]);

  const handleAddToCart = () => {
    dispatch(addToCart({ quantity: 1, product: data }));

    // keep track of the popup id so we can remove it after 3 seconds
    const popupId = new Date().getTime();
    // add the popup to the state
    setPopups((prevPopups) => [...prevPopups, { id: popupId, message: "Added to cart!" }]);
    // remove the popup after 3 seconds
    setTimeout(() => {
      setPopups((prevPopups) => prevPopups.filter((popup) => popup.id !== popupId));
    }, 3000);
  };

  // check if the product is already in the cart
  useEffect(() => {
    const cartItem = cart.products.filter((product) => product.id === params.id);
    if (cartItem.length > 0) {
      setInCart(true);
      setCartItem(cartItem);
    }
  }, [cart.products, params.id]);

  // if the product is already in the cart, show the popup
  if (isLoading) {
    return (
      <Wrapper>
        <Heading1 id="main">Loading Product.....</Heading1>
        <RatingLink>
          <RatingStars rating={0} reviews={[]} />
        </RatingLink>
        <PageGrid>
          <ProductPageLoader />
        </PageGrid>
      </Wrapper>
    );
  }

  // if there is an error, show the error message
  if (isError) {
    return (
      <Wrapper>
        <Heading1 id="main">An error occurred, refresh and try again or check the product still exists.</Heading1>
      </Wrapper>
    );
  }

  updateHead(data.title, data.description);

  return (
    <Wrapper>
      <Heading1 id="main">{data.title}</Heading1>
      <RatingLink href="#reviews">
        <RatingStars rating={data.rating} reviews={data.reviews} />
      </RatingLink>
      <PageGrid>
        <ImageContainer>
          <ProductImage src={data.imageUrl} alt={data.title} />
          {data.discountedPrice < data.price ? <ProductSaleBanner>Save {Math.round(((data.price - data.discountedPrice) / data.price) * 100)}%</ProductSaleBanner> : ""}
        </ImageContainer>
        <DetailsContainer>
          <Heading2>Product Brief</Heading2>
          <p>{data.description}</p>
          <Divider />
          {data.discountedPrice < data.price ? (
            <PreviousPrice>
              Original Price: <PreviousPriceAmount>kr {data.price}</PreviousPriceAmount>
            </PreviousPrice>
          ) : (
            ""
          )}
          <CurrentPrice>Current Price: {data.discountedPrice < data.price ? `kr ${data.discountedPrice}, Save kr ${data.price - data.discountedPrice}` : "kr " + data.price}</CurrentPrice>
          <Divider />
          {inCart ? <p>Already {cartItem[0].quantity} in your cart.</p> : ""}
          {popups.map((popup) => (
            <Popup key={popup.id} className="popup">
              <p>{popup.message}</p>
            </Popup>
          ))}
          <ButtonAddCart onClick={handleAddToCart}>
            <IconImage src={cartIcon} alt="cart icon" />
            {inCart ? "Add Another" : "Add To Cart"}
          </ButtonAddCart>
          <Divider />
          <p>Categories: {data.tags ? data.tags.join(", ") : "None"}</p>
        </DetailsContainer>
      </PageGrid>
      <Heading2 id="reviews">Reviews</Heading2>
      <div>
        {data.reviews && data.reviews.length > 0 ? (
          data.reviews.map((review) => (
            <div key={review.id}>
              <Divider />
              <h3>{review.username}</h3>
              <p>{review.description}</p>
              <RatingStars rating={review.rating} reviews={data.reviews} />
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </Wrapper>
  );
}

export default ProductPage;
