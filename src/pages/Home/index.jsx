import { useState, useEffect } from "react";
import { HomeHeading, PageWrapper, Main, FilterContainer, Filter, HiddenLabel } from "./styles";
import Head from "../../components/Head";
import Search from "../../components/Search";
import useProducts from "../../hooks/useProducts";
import ProductsGrid from "../../components/ProductsGrid";
import { filterProducts } from "../../utilities/filter";
import { sortProducts } from "../../utilities/sort";
import FilterCategoryOptions from "../../components/FilterCategories";

/**
 * Creates the homepage
 * @returns
 */
export default function Home() {
  const { data, isLoading, isError } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterHeading, setFilterHeading] = useState("All Products");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortValue, setSortValue] = useState("");

  //filter and sort products on load
  useEffect(() => {
    if (!isLoading && !isError) {
      setFilteredProducts(data);
      setSortedProducts(data);
    }
  }, [isLoading, isError, data]);

  //filter and sort products on change of filter dropdown
  const onChangeFilter = (event) => {
    const value = event.target.value;
    const filtered = filterProducts(data, value);
    setFilterHeading(value.charAt(0).toUpperCase() + value.slice(1));
    setFilteredProducts(filtered);
    setSortedProducts(sortProducts(filtered, sortValue));
  };

  //filter and sort products on change of sort dropdown
  const onChangeSort = (event) => {
    const value = event.target.value;
    const sorted = sortProducts(filteredProducts, value);
    setSortedProducts(sorted);
    setSortValue(value);
  };

  //render the page
  return (
    <Main>
      <Head title="Home" description="TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment." />
      <HomeHeading id="main">Welcome To TechBeauty</HomeHeading>
      <Search />
      <PageWrapper>
        <FilterContainer>
          <h2>Now Viewing {filterHeading}</h2>
          <HiddenLabel>Categories</HiddenLabel>
          <Filter onChange={onChangeFilter} disabled={isLoading}>
            <option value="All Products" defaultValue>
              All Categories
            </option>
            <FilterCategoryOptions data={data} isLoading={isLoading} isError={isError} />
          </Filter>
          <HiddenLabel>Sort Order</HiddenLabel>
          <Filter onChange={onChangeSort} disabled={isLoading}>
            <option value="default" defaultValue>
              Sort Order
            </option>
            <option value="price-high">Price High-Low</option>
            <option value="price-low">Price Low-High</option>
            <option value="rating">Highest Rated</option>
            <option value="az">Name A-Z</option>
            <option value="za">Name Z-A</option>
          </Filter>
        </FilterContainer>
        <ProductsGrid data={sortedProducts} isLoading={isLoading} isError={isError} />
      </PageWrapper>
    </Main>
  );
}
