import React from "react";

type Props = {
  preBtnNm: string;
  nextBtnNm: string;
  preBtnClick: never;
  nextBtnClick: never;
  onClick: never;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Button = ({ preBtnNm, nextBtnNm, preBtnClick, nextBtnClick }: Props) => {
  return (
    <div className="PreNextBtn">
      <button name="pre" type="button" className="left" onClick={preBtnClick}>
        {preBtnNm}
      </button>

      <button
        name="next"
        type="button"
        className="right"
        onClick={nextBtnClick}
      >
        {nextBtnNm}
      </button>
    </div>
  );
};
export default Button;
