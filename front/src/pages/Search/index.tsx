import React from "react";
import SearchBar from "@src/components/Search/SearchBar";
import SearchList from "@src/components/Search/SearchList";

const Search: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <SearchList text="고3공부비법"/>
    </div>
  );
};

export default Search;
