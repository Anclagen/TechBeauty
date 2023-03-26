import { SearchItemImage, SearchItemLink, SearchItemTitle, SearchItemPrice } from "./styles";

/**
 * Creates a search dropdown link to an item.
 * @param {Object} item to be displayed
 * @returns {JSX.Element} Search dropdown item
 * @example
 * <SearchItem item={item} />
 */
export default function SearchItem({ item }) {
  return (
    <SearchItemLink to={`product/${item.id}`}>
      <SearchItemImage src={item.imageUrl} alt={item.title} />
      <SearchItemTitle>{item.title}</SearchItemTitle>
      <SearchItemPrice>Price: NOK {item.discountedPrice}</SearchItemPrice>
    </SearchItemLink>
  );
}
