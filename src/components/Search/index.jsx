import { SearchInput, Banner, SearchContainer, HiddenLabel, AutoComplete, SearchItemImage } from "./styles"
import bannerImage from "../../assets/banner.jpg"
import { search } from "../../utilities/search"
import { useSelector } from "react-redux"

export default function Search(){
  const {isLoading, data} = useSelector((state) => state.products);
  const query = "Bl"
  let results = search(data, query)
  if(query.trim() === "" || query.length < 2){
    results = []
  }


  return(
    <SearchContainer>
      <Banner src={bannerImage} alt="Heart shaped mechanical clock"/>
      <HiddenLabel htmlFor="search">Search Input</HiddenLabel>
      <SearchInput id="search" placeholder="Search TechBeauty." type="search" autoComplete="off" disabled={isLoading}/>
      <AutoComplete>
        {results.length > 0 ? results.map(item => <div key={item.id}><p><SearchItemImage src={item.imageUrl} alt={item.title}/>{item.title}. Price: kr{item.price}</p></div>): ""}
      </AutoComplete>
    </SearchContainer>
    
  )
}