import React from "react";
import { ProductContainer, ProductHeading, ProductImage, ProductLink, ProductImageContainer, ProductSaleBanner } from "./styles";
import { RatingStars } from "../RatingStars/";

export default function ProductCard({ product }) {
  //const {id, title, imageUrl, price, discountedPrice, rating, tags, reviews, description} = product
  const { id, title, imageUrl, price, discountedPrice, rating, reviews } = product;
  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage src={imageUrl} alt={title} />
        {price === discountedPrice ? "" : <ProductSaleBanner>Sale {Math.round(((price - discountedPrice) / price) * 100)}%</ProductSaleBanner>}
      </ProductImageContainer>

      <div>
        <ProductHeading>{title}</ProductHeading>
        <RatingStars rating={rating} reviews={reviews}></RatingStars>
        <p>Price: {price === discountedPrice ? `kr ${price}` : `kr ${discountedPrice}, save kr ${(price - discountedPrice).toFixed(2)}`}</p>
        <ProductLink to={`product/${id}`}>View More</ProductLink>
      </div>
    </ProductContainer>
  );
}
