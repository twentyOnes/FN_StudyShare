import React from "react";
import styled from "@emotion/styled";

const HeaderLayout = styled.header``;
const Header = () => {
  return (
    <HeaderLayout>
      <h1>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="로고" />
      </h1>
    </HeaderLayout>
  );
};

export default Header;
