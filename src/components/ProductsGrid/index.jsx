import ProductCard from "../ProductCard";
import ProductCardLoader from "../ProductLoader";
import { ProductGrid } from "./styles";

/**
 * Returns grid of product cards
 * @param {props} props {isLoading, isError, data}
 * @example
 * <ProductsGrid data={data} isLoading={isLoading} isError={isError} />
 */
export default function ProductsGrid({ isLoading, isError, data = [] }) {
  if (isLoading) {
    return (
      <ProductGrid>
        {[...Array(25)].map((e, i) => (
          <ProductCardLoader key={i} />
        ))}
      </ProductGrid>
    );
  }

  if (isError) {
    return <div>Fetch failed, please refresh and try again. If this problem persists contact the administrator at admin@admin.com.</div>;
  }

  return (
    <ProductGrid>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}
