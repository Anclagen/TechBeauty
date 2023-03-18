import { HomeHeading, PageWrapper, Main, FilterContainer, Filter, HiddenLabel } from "./styles";
import { updateHead } from "../../utilities/updateHead";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import Products from "../../hooks/Product";
import ProductsGrid from "../../components/ProductsGrid";

/**
 * Creates the homepage
 * @returns
 */
export default function Home() {
  updateHead("TechBeauty | Home", "TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment.");
  const { data, isLoading, isError } = useSelector((state) => state.products);
  Products();

  return (
    <Main>
      <HomeHeading>Welcome To TechBeauty</HomeHeading>
      <Search />
      <PageWrapper>
        <FilterContainer>
          <h2>All Products</h2>

          <HiddenLabel>Categories</HiddenLabel>
          <Filter>
            <option defaultValue>All Categories</option>
          </Filter>
          <HiddenLabel>Sort Order</HiddenLabel>
          <Filter>
            <option defaultValue>Sort Order</option>
            <option>Price, High-Low</option>
            <option>Price, Low-High</option>
            <option>Rating, Highest Rated</option>
            <option>Name, A-Z</option>
            <option>Name, Z-A</option>
          </Filter>
        </FilterContainer>
        <ProductsGrid data={data} isLoading={isLoading} isError={isError} />
      </PageWrapper>
    </Main>
  );
}
