import styled from "@emotion/styled";

// 검색창
export const Bar = styled.form`
  width: 100%;
  margin: 0.6em 0 1.1875em 0;
  display: flex;
`;

export const Input = styled.div`
  display: flex;
  height: 32px;
  justify-content: space-around;
  overflow: hidden;
  box-sizing: border-box;
  width: 97%;
  border: none;
  background: #e4e4e4;
  border-radius: 10px;
  position: relative;
  img {
    width: 1.3em;
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
    line-height: 32px;
  }
`;

export const Close = styled.button`
  width: 3%;
`;

// 최근검색 리스트

export const List = styled.ul`
  li {
    padding: 9px 14px;
    background: #f4f4f4;
    border-radius: 25px;
    display: inline-block;
    color: #999999;
    font-size: 0.625em;
    margin: 0.5em 0.625em;
  }
`;
