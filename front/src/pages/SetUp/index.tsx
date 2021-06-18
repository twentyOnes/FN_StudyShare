import React from "react";

import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import { Link } from "react-router-dom";

import { Setting } from "./styles";

// 환경설정 페이지
const SetUp: React.FC = () => {
  return (
    <Setting>
      <Header />

      <ul>
        <li>
          <Link to="/profile">
            프로필 수정하기<span>&gt;</span>
          </Link>
        </li>
        <li>
          <Link to="/complaint">
            불편신고<span>&gt;</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            로그아웃<span>&gt;</span>
          </Link>
        </li>
      </ul>
      <Fnb />
    </Setting>
  );
};

export default SetUp;
