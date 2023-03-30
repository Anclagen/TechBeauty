import { ImageLoader, ContentLoader, HeadingLoader, DescriptionLoader, DividerLoader, PriceLoader, ButtonLoader } from "./styles";

/**
 * Skeleton loader for product page
 * @returns {JSX.Element} Skeleton loader for product page
 */
function ProductPageLoader() {
  return (
    <>
      <ImageLoader></ImageLoader>
      <ContentLoader>
        <HeadingLoader></HeadingLoader>
        <DescriptionLoader></DescriptionLoader>
        <DividerLoader />
        <PriceLoader />
        <PriceLoader />
        <DividerLoader />
        <ButtonLoader />
        <DividerLoader />
        <PriceLoader />
      </ContentLoader>
    </>
  );
}

export default ProductPageLoader;
