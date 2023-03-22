import { SearchItemImage, SearchItemLink, SearchItemTitle, SearchItemPrice } from "./styles";

/**
 * Creates a search dropdown link to an item.
 * @param {Object} item to be displayed
 * @returns
 */
export default function SearchItem({ item }) {
  return (
    <SearchItemLink to={`product/${item.id}`}>
      <SearchItemImage src={item.imageUrl} alt={item.title} />
      <SearchItemTitle>{item.title}</SearchItemTitle>
      <SearchItemPrice>Price: kr {item.discountedPrice}</SearchItemPrice>
    </SearchItemLink>
  );
}
