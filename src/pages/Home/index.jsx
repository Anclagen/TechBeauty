import { useState, useEffect } from "react";
import { HomeHeading, PageWrapper, Main, FilterContainer, Filter, HiddenLabel } from "./styles";
import { updateHead } from "../../utilities/updateHead";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import Products from "../../hooks/Product";
import ProductsGrid from "../../components/ProductsGrid";
import { filterProducts } from "../../utilities/filter";
import { sortProducts } from "../../utilities/sort";

function FilterOption({ isLoading, isError, data }) {
  if (isLoading || isError) {
    return "";
  }
  const categories = [...new Set(data.flatMap((product) => product.tags))];
  return (
    <>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </>
  );
}

/**
 * Creates the homepage
 * @returns
 */
export default function Home() {
  updateHead("TechBeauty | Home", "TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment.");
  const { data, isLoading, isError } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  Products();

  useEffect(() => {
    if (!isLoading && !isError) {
      setFilteredProducts(data);
      setSortedProducts(data);
    }
  }, [isLoading, isError, data]);

  const onChangeFilter = (event) => {
    const value = event.target.value;
    const filtered = filterProducts(data, value);
    setFilteredProducts(filtered);
    setSortedProducts(sortProducts(filtered));
  };

  const onChangeSort = (event) => {
    const value = event.target.value;
    const sorted = sortProducts(filteredProducts, value);
    setSortedProducts(sorted);
  };

  return (
    <Main>
      <HomeHeading>Welcome To TechBeauty</HomeHeading>
      <Search />
      <PageWrapper>
        <FilterContainer>
          <h2>All Products</h2>

          <HiddenLabel>Categories</HiddenLabel>
          <Filter onChange={onChangeFilter} disabled={isLoading}>
            <option value="default" defaultValue>
              All Categories
            </option>
            <FilterOption data={data} isLoading={isLoading} isError={isError} />
          </Filter>
          <HiddenLabel>Sort Order</HiddenLabel>
          <Filter onChange={onChangeSort} disabled={isLoading}>
            <option value="default" defaultValue>
              Sort Order
            </option>
            <option value="price-high">Price, High-Low</option>
            <option value="price-low">Price, Low-High</option>
            <option value="rating">Rating, Highest Rated</option>
            <option value="az">Name, A-Z</option>
            <option value="za">Name, Z-A</option>
          </Filter>
        </FilterContainer>
        <ProductsGrid data={sortedProducts} isLoading={isLoading} isError={isError} />
      </PageWrapper>
    </Main>
  );
}
