import styled from "@emotion/styled";

// 검색창
export const Bar = styled.form`
  width: 100%;
  margin: 0.6em 0 1.1875em 0;
  display: grid;
  grid-template-columns: auto 1em;
`;

export const Input = styled.div`
  display: grid;
  height: 32px;
  overflow: hidden;
  box-sizing: border-box;
  border: none;
  background: #e4e4e4;
  border-radius: 10px;
  grid-template-columns: 2.5em auto 3em;
  img {
    width: 1.1em;
    height: 100%;
    margin-left: 0.7em;
  }
  input {
    width: 91%;
    height: 100%;
    background: #e4e4e4;
    padding-left: 1em;
    border: none;
  }
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
  button {
    color: #999999;
    cursor: pointer;
  }
`;

export const Close = styled.button`
  margin-left: 0.475em;
`;

// 최근검색 리스트

export const List = styled.ul`
  li {
    padding: 0.56em 0.825em;
    background: #f4f4f4;
    border-radius: 25px;
    display: inline-block;
    color: #999999;
    font-size: 0.7em;
    margin: 0.5em;
  }
`;
