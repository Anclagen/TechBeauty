import { ProductLoaderContainer, ProductLoaderImage, ProductLoaderHeading, ProductLoaderPrice, ProductLoaderButton } from "./styles";

export default function ProductCardLoader() {
  return (
    <ProductLoaderContainer>
      <ProductLoaderImage/>
      <ProductLoaderHeading/>
      <ProductLoaderPrice/>
      <ProductLoaderButton/>
    </ProductLoaderContainer>
  );
}