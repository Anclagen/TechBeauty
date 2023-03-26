import { ProductLoaderContainer, ProductLoaderImage, ProductLoaderHeading, ProductLoaderPrice, ProductLoaderButton } from "./styles";

/**
 * Skeleton loader for product cards
 * @returns {JSX.Element} Skeleton loader
 */
export default function ProductCardLoader() {
  return (
    <ProductLoaderContainer>
      <ProductLoaderImage />
      <ProductLoaderHeading />
      <ProductLoaderPrice />
      <ProductLoaderButton />
    </ProductLoaderContainer>
  );
}
