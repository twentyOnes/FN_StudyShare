import React from "react";
import { PreNextBtn } from "./styles";

type Props = {
  preBtnNm: string;
  nextBtnNm: string;
};

const TwoButton: React.FC<Props> = ({ preBtnNm, nextBtnNm }: Props) => {
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
