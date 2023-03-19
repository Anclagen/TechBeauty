import { useState, useEffect } from "react";
import { HomeHeading, PageWrapper, Main, FilterContainer, Filter, HiddenLabel } from "./styles";
import { updateHead } from "../../utilities/updateHead";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import Products from "../../hooks/Product";
import ProductsGrid from "../../components/ProductsGrid";
import { filterProducts } from "../../utilities/filter";
import { sortProducts } from "../../utilities/sort";
import FilterCategoryOptions from "../../components/FilterCategories";

/**
 * Creates the homepage
 * @returns
 */
export default function Home() {
  updateHead("TechBeauty | Home", "TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment.");
  const { data, isLoading, isError } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortValue, setSortValue] = useState("default");
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
    setSortedProducts(sortProducts(filtered, sortValue));
  };

  const onChangeSort = (event) => {
    const value = event.target.value;
    const sorted = sortProducts(filteredProducts, value);
    setSortedProducts(sorted);
    setSortValue(value);
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
            <FilterCategoryOptions data={data} isLoading={isLoading} isError={isError} />
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
