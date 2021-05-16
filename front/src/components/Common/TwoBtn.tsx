/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { PreNextBtn } from "./styles";

type Props = {
  preBtnNm: string;
  nextBtnNm: string;
};

const TwoButton = ({ preBtnNm, nextBtnNm }: Props) => {
  return (
    <PreNextBtn>
      <button name="pre" type="button" className="left">
        {preBtnNm}
      </button>

      <button name="next" type="button" className="right">
        {nextBtnNm}
      </button>
    </PreNextBtn>
  );
};

export default TwoButton;
