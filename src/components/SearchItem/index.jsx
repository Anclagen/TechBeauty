import { SearchItemImage, SearchItemLink, SearchItemTitle,  SearchItemPrice} from "./styles"

export default function SearchItem({item}){
  return (
    <SearchItemLink to={`product/${item.id}`}>
      <SearchItemImage src={item.imageUrl} alt={item.title}/>
      <SearchItemTitle>{item.title}</SearchItemTitle>
      <SearchItemPrice>Price: kr {item.discountedPrice}</SearchItemPrice>
    </SearchItemLink>)
}