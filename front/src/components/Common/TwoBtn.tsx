import React from 'react';
import { PreNextBtn } from './styles';
import { Link } from 'react-router-dom';

type Props = {
  preBtnNm: string;
  nextBtnNm: string;
  link01: string;
  link02: string;
};

const TwoButton: React.FC<Props> = ({ preBtnNm, nextBtnNm, link01, link02 }: Props) => {
  return (
    <PreNextBtn>
      <button name="pre" type="button" className="left">
        <Link to={link01}>{preBtnNm}</Link>
      </button>

      <button name="next" type="button" className="right">
        <Link to={link02}>{nextBtnNm}</Link>
      </button>
    </PreNextBtn>
  );
};

export default TwoButton;
