import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/useAPI";
import Head from "../../components/Head";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../ReduxStore/cartSlice";
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
} from "./styles";
import cartIcon from "../../assets/shopping_cart_add.png";
import { RatingStars } from "../../components/RatingStars";
import PopupMessage from "../../components/Popup";
import ProductPageLoader from "../../components/ProductPageLoader";
import usePopup from "../../hooks/usePopup";
import RelatedProducts from "../../components/RelatedProducts";

/**
 * Creates Products page
 * @returns {JSX.Element} Product page
 */
function ProductPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError } = useAPI(baseURL + params.id);
  const { popups, showPopup } = usePopup();
  const [inCart, setInCart] = useState(false);
  const [cartItem, setCartItem] = useState({});

  // update the cart state
  const handleAddToCart = () => {
    // add the product to the cart
    dispatch(addToCart({ quantity: 1, product: data }));
    // show the popup
    showPopup("Product added to cart");
  };

  // check if the product is already in the cart
  useEffect(() => {
    const cartItem = cart.products.filter((product) => product.id === params.id);
    if (cartItem.length > 0) {
      setInCart(true);
      setCartItem(cartItem);
    } else {
      setInCart(false);
    }
  }, [cart.products, params.id]);

  // if the product is already in the cart, show the popup
  if (isLoading) {
    return (
      <Wrapper>
        <Head title="Loading Product" description="Loading product page, please wait." />
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
  if (isError || data.statusCode > 200) {
    return (
      <Wrapper>
        <Head title="Error" description="An error occurred, refresh and try again or check the product still exists." />
        <Heading1 id="main">An error occurred, refresh and try again or check the product still exists.</Heading1>
      </Wrapper>
    );
  }

  // return the product page
  return (
    <Wrapper>
      <Head title={data.title} description={data.description} />
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
              Original Price: <PreviousPriceAmount>NOK {data.price}</PreviousPriceAmount>
            </PreviousPrice>
          ) : (
            ""
          )}
          <CurrentPrice>
            Current Price: {data.discountedPrice < data.price ? `NOK ${data.discountedPrice}, Save NOK ${Math.round(data.price - data.discountedPrice)}` : "kr " + data.price}
          </CurrentPrice>
          <Divider />
          {inCart ? <p>Already {cartItem[0].quantity} in your cart.</p> : ""}
          {popups.map((popup) => (
            <PopupMessage key={popup.id} message={popup.message} />
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
      <Divider />
      <Heading2 id="reviews">Related Products</Heading2>
      {data.id ? <RelatedProducts product={data} /> : ""}
    </Wrapper>
  );
}

export default ProductPage;
