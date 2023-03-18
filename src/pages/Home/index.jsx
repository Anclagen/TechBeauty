import { baseURL } from "../../utilities/constants";
import ProductCard from "../../components/ProductCard";
import ProductCardLoader from "../../components/ProductLoader";
import { HomeHeading, ProductGrid, PageWrapper, Main, FilterContainer, Filter, HiddenLabel } from "./styles";
import { updateHead } from "../../utilities/updateHead";
import Search from "../../components/Search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProducts, fetchedProducts, fetchFailed } from "../../context/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.products);

  //prevent constant reloading, also a means of storing for search component.
  useEffect(() => {
    if (data.length === 0) {
      const getProducts = async () => {
        try {
          dispatch(fetchingProducts());
          const res = await fetch(baseURL);
          const data = await res.json();
          dispatch(fetchedProducts(data));
        } catch {
          dispatch(fetchFailed());
        }
      };
      getProducts();
    }
  }, [dispatch, data]);

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

export default function Home() {
  updateHead("TechBeauty | Home", "TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment.");

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
        <Products />
      </PageWrapper>
    </Main>
  );
}
