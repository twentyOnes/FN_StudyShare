import { css } from "@emotion/react";

export const HeaderLayout = css`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  vertical-align: middle;
  background: #ffffff;
  padding: 1em;
  z-index: 100;
`;

export const HeaderWrap = css`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = css`
  line-height: 0;
  img {
    width: 70%;
  }
`;
export const Buttons = css`
  vertical-align: middle;
  img {
    width: 70%;
  }
  .alarm {
    margin-left: 1em;
  }
`;
