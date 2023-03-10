import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/API";
import  ProductCard  from "../../components/ProductCard";
import  ProductCardLoader  from "../../components/ProductLoader";
import { Banner, HomeHeading, ProductGrid, PageWrapper, Main, FilterContainer,Filter, HiddenLabel} from "./styles";
import bannerImage from "../../assets/banner.jpg"
import { updateHead } from "../../utilities/updateHead";
//import { search } from "../../utilities/search";

function Products() { 
  const {data, isLoading, isError} = useAPI(baseURL);
  if(!isLoading){
    console.log(data)
  }

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
      <Banner src={bannerImage} alt="Heart shaped mechanical clock"></Banner>
      <PageWrapper>
      <HomeHeading>Explore TechBeauty's Products</HomeHeading>
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
