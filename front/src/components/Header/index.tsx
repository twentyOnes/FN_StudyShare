import React from "react";
import { Link } from "react-router-dom";
import { HeaderLayout, HeaderWrap, Logo, Buttons } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <HeaderWrap>
        <Logo>
          <img
            src={process.env.PUBLIC_URL + "/images/logo_header.png"}
            alt="로고"
          />
        </Logo>

        <Buttons>
          <Link to="/search">
            <button type="button">
              <img
                src={process.env.PUBLIC_URL + "/images/btn_search.svg"}
                alt="검색"
              />
            </button>
          </Link>

          <Link to="/alarm" className="alarm">
            <button type="button">
              <img
                src={process.env.PUBLIC_URL + "/images/btn_alarm.svg"}
                alt="알림"
              />
            </button>
          </Link>
        </Buttons>
      </HeaderWrap>
    </HeaderLayout>
  );
};

export default Header;
