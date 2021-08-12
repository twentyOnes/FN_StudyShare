import { css } from "@emotion/react";

export const Setting = css`
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1.8em 0;
    width: 100%;
    &:nth-child(1) {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      margin-top: 2em;
    }
    a {
      color: #000000;
      margin-left: 2.1875em;
      width: 100%;
      font-size: 2em;
      display: inline-block;
      span {
        margin-left: 1em;
      }
    }
  }
`;
