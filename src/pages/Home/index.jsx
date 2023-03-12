import { baseURL } from "../../utilities/constants";
import  ProductCard  from "../../components/ProductCard";
import  ProductCardLoader  from "../../components/ProductLoader";
import { Banner, HomeHeading, ProductGrid, PageWrapper, Main, FilterContainer,Filter, HiddenLabel, SearchContainer} from "./styles";
import bannerImage from "../../assets/banner.jpg"
import { updateHead } from "../../utilities/updateHead";
import Search from "../../components/Search";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchingProducts, fetchedProducts, fetchFailed } from '../../context/productsSlice';


function Products() { 
  const dispatch = useDispatch();
  const {data, isLoading, isError} = useSelector((state) => state.products);

  //prevent constant reloading
  useEffect(() => {
    if(data.length === 0){
      const getProducts = async () => {
        try{
          dispatch(fetchingProducts());
          const res = await fetch(baseURL);
          const data = await res.json();
          dispatch(fetchedProducts(data))
          console.log(data)
        } catch {
          dispatch(fetchFailed());
        }
      }
      getProducts()

    }
  }, [dispatch, data])

  if (isLoading) {
    return <ProductGrid>
              {[...Array(25)].map((e, i) => <ProductCardLoader key={i}/>)}
            </ProductGrid>
  } 

  if (isError) {
    return <div>An Error Occurred Fetching The Data.</div>;
  }

  return (
    <ProductGrid>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}

export default function Home(){
  updateHead("TechBeauty | Home", "TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment.")

  return(
    <Main>
      <HomeHeading>Welcome To TechBeauty</HomeHeading>
      <SearchContainer>
        <Banner src={bannerImage} alt="Heart shaped mechanical clock"/>
        <Search/>
      </SearchContainer>
      
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
  )
}
