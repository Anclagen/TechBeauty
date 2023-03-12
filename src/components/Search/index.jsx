import { SearchInput, Banner, SearchContainer, HiddenLabel, AutoComplete, NoResult, ResultContainer } from "./styles";
import bannerImage from "../../assets/banner.jpg";
import { search } from "../../utilities/search";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchItem from "../SearchItem";

/**
 * This creates a search input, with dropdown links to items related to input.
 */
export default function Search() {
  const { isLoading, data } = useSelector((state) => state.products);
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  //filter out result for a single letter
  let results = search(data, query);
  if (query.trim() === "" || query.length < 2) {
    results = [];
  }

  function onInputQuery(event) {
    setQuery(event.currentTarget.value);
  }

  return (
    <SearchContainer>
      <Banner src={bannerImage} alt="Heart shaped mechanical clock" />
      <HiddenLabel htmlFor="search">Search Input</HiddenLabel>
      <SearchInput id="search" placeholder="Search TechBeauty." type="search" autoComplete="off" disabled={isLoading} onChange={onInputQuery} value={query} />
      <AutoComplete>
        {results.length > 0 ? (
          <ResultContainer>
            {" "}
            {results.map((item) => (
              <SearchItem key={item.id} item={item} />
            ))}
          </ResultContainer>
        ) : query.length > 1 && query.trim() !== "" ? (
          <NoResult>No results found for "{query}"</NoResult>
        ) : (
          ""
        )}
      </AutoComplete>
    </SearchContainer>
  );
}
