import React from "react";
import { List } from "./styles";

type Props = {
  text: string;
};

const SearchBar: React.FC<Props> = ({ text }: Props) => {
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
