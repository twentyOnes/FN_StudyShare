import React from "react";
import { Bar, Input, Close } from "./styles";
import { useHistory } from "react-router-dom";

const SearchBar: React.FC = () => {
  const history = useHistory();

  return (
    <Bar className="search">
      <Input>
        <img
          src={process.env.PUBLIC_URL + "/images/btn_search.svg"}
          alt="찾기"
        />
        <input type="search" />
        <button type="reset">취소</button>
      </Input>

      <Close type="button" onClick={() => history.goBack()}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z"
            fill="#999999"
          />
        </svg>
      </Close>
    </Bar>
  );
};

export default SearchBar;
