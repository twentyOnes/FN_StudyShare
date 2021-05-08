import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import MyInfo from "../../components/Mypage/MyInfo";

const MyPage: React.FC = () => {
  return (
    <div>
      <Header />
      <MyInfo />
      <Fnb />
    </div>
  );
};

export default MyPage;
