import React from "react";
import { List } from "./styles";

type Props = {
  text: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SearchBar = ({ text }: Props) => {
  return (
    <List>
      <li>#{text}</li>
      <li>#{text}</li>
      <li>#{text}</li>
      <li>#{text}</li>
      <li>#{text}</li>
      <li>#{text}</li>
    </List>
  );
};

export default SearchBar;
