import React from "react";
import { ProductContainer, ProductHeading, ProductImage, ProductLink, ProductImageContainer, ProductSaleBanner, ProductPrice, ProductPriceDiscounted, Savings } from "./styles";
import { RatingStars } from "../RatingStars/";

/**
 * Creates a product card for a specific product.
 * @param {Object} product The product details
 * @returns {JSX.Element} Product card
 */
export default function ProductCard({ product }) {
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
        {price === discountedPrice ? (
          <ProductPrice>Price: NOK {price} </ProductPrice>
        ) : (
          <>
            <Savings>Save: NOK {(price - discountedPrice).toFixed(2)}</Savings>
            <ProductPriceDiscounted>Price: NOK {discountedPrice}</ProductPriceDiscounted>
          </>
        )}
        <ProductLink to={`/product/${id}`}>View More</ProductLink>
      </div>
    </ProductContainer>
  );
}
