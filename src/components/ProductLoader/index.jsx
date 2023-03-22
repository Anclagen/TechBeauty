import { ProductLoaderContainer, ProductLoaderImage, ProductLoaderHeading, ProductLoaderPrice, ProductLoaderButton } from "./styles";

/**
 * Skeleton loader for product cards
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
