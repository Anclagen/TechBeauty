import { SearchInput, SearchContainer, HiddenLabel, AutoComplete, NoResult, ResultContainer } from "./styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchItem from "../SearchItem";
import { search } from "../../utilities/search";

/**
 * This creates a search input, with dropdown links to items related to input.
 * @returns {JSX.Element} Search input
 * @example
 * <Search />
 */
export default function Search() {
  const { isLoading, isError, data } = useSelector((state) => state.products);
  const [query, setQuery] = useState("");

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
      <HiddenLabel htmlFor="search">Search Input</HiddenLabel>
      <SearchInput id="search" placeholder="Search TechBeauty." type="search" autoComplete="off" disabled={isLoading && isError} onChange={onInputQuery} value={query} />
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
