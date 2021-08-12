import { css } from "@emotion/react";

export const AlarmHeaderWrap = css`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  vertical-align: middle;
  background: #ffffff;
  padding: 1.6em 1em;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
`;

export const AlarmWrap = css`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

export const Back = css`
  vertical-align: middle;
  img {
    width: 70%;
    vertical-align: middle;
  }
`;

export const Title = css`
  vertical-align: middle;
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 0.7em;
  display: inline-block;
  margin-bottom: 0;
`;
