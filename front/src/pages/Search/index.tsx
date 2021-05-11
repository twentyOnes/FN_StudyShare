import React from "react";
import SearchBar from "@src/components/Search/SearchBar";
import SearchList from "@src/components/Search/SearchList";
import More from "@src/components/Modal/More";

const Search: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <SearchList text="고3공부비법" />
      <More />
    </div>
  );
};

export default Search;
