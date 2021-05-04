import React from "react";
import { HeaderLayout, Logo, Buttons } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <Logo>
        <img
          src={process.env.PUBLIC_URL + "/images/logo_header.png"}
          alt="로고"
        />
      </Logo>

      <Buttons>
        <button type="button">
          <img
            src={process.env.PUBLIC_URL + "/images/btn_search.svg"}
            alt="검색"
          />
        </button>
        <button type="button">
          <img
            src={process.env.PUBLIC_URL + "/images/btn_alarm.svg"}
            alt="알림"
          />
        </button>
      </Buttons>
    </HeaderLayout>
  );
};

export default Header;
