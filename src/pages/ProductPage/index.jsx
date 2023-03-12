import { useParams } from "react-router-dom";
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/API";
import { updateHead } from "../../utilities/updateHead";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from "../../context/cartSlice";
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
  RatingStar,
  RatingLink,
  ButtonAddCart,
  IconImage,
  CurrentPrice,
  PreviousPrice,
  PreviousPriceAmount,
} from "./styles";
import fullStar from "../../assets/review_star.png";
import emptyStar from "../../assets/empty_review_star.png";
import cartIcon from "../../assets/shopping_cart_add.png";

function RatingStars({ rating, reviews }) {
  const full = parseInt(Math.round(rating));
  const empty = 5 - full;
  const stars = [];

  for (let i = 0; i < full; i++) {
    stars.push(<RatingStar src={fullStar} alt="rating star icon" key={`full-${i}`} />);
  }
  for (let i = 0; i < empty; i++) {
    stars.push(<RatingStar src={emptyStar} alt="rating star icon" key={`empty-${i}`} />);
  }

  return (
    <p>
      Rating: {stars} ({reviews && reviews.length === 0 ? "Unrated" : rating})
    </p>
  );
}

function ProductPage() {
  //const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const { data, isLoading, isError } = useAPI(baseURL + params.id);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>An Error Occurred Fetching The Data.</div>;
  }

  updateHead(data.title, data.description);
  return (
    <Wrapper>
      <Heading1>{data.title}</Heading1>
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
          <CurrentPrice>Current Price: {data.discountedPrice < data.price ? `kr ${data.discountedPrice}, Save kr ${data.price - data.discountedPrice}` : "kr " + data.discountedPrice}</CurrentPrice>
          <Divider />
          <ButtonAddCart onClick={() => dispatch(addToCart({ quantity: 1, product: data }))}>
            <IconImage src={cartIcon} alt="cart icon" />
            Add To Cart
          </ButtonAddCart>
          <Divider />
          <p>Categories: {data.tags ? data.tags.join(", ") : "None"}</p>
          <button onClick={() => dispatch(removeFromCart({ product: data }))}>remove</button>
          <button onClick={() => dispatch(decreaseQuantity({ quantity: 1, product: data }))}>decrease</button>
          <button onClick={() => dispatch(clearCart())}>clear</button>
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
