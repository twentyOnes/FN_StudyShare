import styled from "@emotion/styled";

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: -1px;
  z-index: 10;
  background: #fff;
  padding: 0.325em 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.04);
`;

export const FooterWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
  .active {
    path {
      fill: #2656ff;
    }
  }
`;
