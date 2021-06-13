import React from "react";
import SearchBar from "@src/components/Search/SearchBar";
import SearchList from "@src/components/Search/SearchList";
import styled from "@emotion/styled";

const SearchWrap = styled.main`
  padding: 0.5625em 0.875em;
`;

const Search: React.FC = () => {
  return (
    <SearchWrap>
      <SearchBar />
      <SearchList text="고3공부비법" />
    </SearchWrap>
  );
};

export default Search;
