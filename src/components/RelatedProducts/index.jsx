import ProductCard from "../ProductCard";
import Products from "../../hooks/Product";
import { useSelector } from "react-redux";
import { RelatedProductsGrid } from "./styles";

/**
 * Returns a grid of related products
 * @param {Object} Product object containing product data
 * @returns {JSX.Element} Related products grid
 * @example
 * <RelatedProducts product={product} />
 */
function RelatedProducts({ product }) {
  const { data, isLoading, isError } = useSelector((state) => state.products);
  Products();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  const filteredProducts = data.filter((item) => item.tags.some((tag) => product.tags.includes(tag) && item.id !== product.id));

  return (
    <RelatedProductsGrid>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </RelatedProductsGrid>
  );
}

export default RelatedProducts;
