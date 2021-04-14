import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vh;
  background: red;
  &:hover {
    color: white;
  }
`;

const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  background: red;
  &:hover {
    color: white;
  }
`;

const Fnb = () => {
  return (
    <>
      <Footer>
        <FooterWrap>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/todo">투두</NavLink>
          <NavLink to="/profile">마이</NavLink>
          <NavLink to="/setup">설정</NavLink>
        </FooterWrap>
      </Footer>
    </>
  );
};

export default Fnb;
