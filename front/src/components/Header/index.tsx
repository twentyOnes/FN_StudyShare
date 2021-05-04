import React from 'react';
import styled from '@emotion/styled';

const HeaderLayout = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.9375em 0;
  line-height: 0;
`;
const Logo = styled.h1`
  img {
    width: 70%;
  }
`;
const Buttons = styled.div`
  vertical-align: middle;
  img {
    width: 70%;
  }
  button:nth-child(2) {
    margin-left: 1.25em;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <Logo>
        <img src={process.env.PUBLIC_URL + '/logo_header.png'} alt="로고" />
      </Logo>

      <Buttons>
        <button type="button">
          <img src={process.env.PUBLIC_URL + '/btn_search.svg'} alt="검색" />
        </button>
        <button type="button">
          <img src={process.env.PUBLIC_URL + '/btn_alarm.svg'} alt="알림" />
        </button>
      </Buttons>
    </HeaderLayout>
  );
};

export default Header;
