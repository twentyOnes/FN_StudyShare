import React from "react";
import styled from "@emotion/styled";

type Props = {
  preBtnNm: string;
  nextBtnNm: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Button = ({ preBtnNm, nextBtnNm }: Props) => {
  return (
    <PreNextButton className="PreNextBtn">
      <button name="pre" type="button" className="left">
        {preBtnNm}
      </button>

      <button name="next" type="button" className="right">
        {nextBtnNm}
      </button>
    </PreNextButton>
  );
};
export default Button;

const PreNextButton = styled.div`
  display: flex;
  font-size: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  button {
    border-radius: 30px;
    color: #fff;
    width: 35%;
    text-align: center;
    padding: 4px 0;
  }
  .left {
    background: #e4e4e4;
    margin-right: 1em;
  }
  .right {
    background: #2656ff;
  }
`;
