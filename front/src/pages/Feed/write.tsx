import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import TwoButton from "../../components/Common/TwoBtn";

const Write: React.FC = () => {
  return (
    <div>
      <Header />
      <TwoButton preBtnNm="삭제하기" nextBtnNm="저장하기" />
      <Fnb />
    </div>
  );
};

export default Write;
