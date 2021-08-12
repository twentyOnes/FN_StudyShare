import { css } from "@emotion/react";

export const profile = css`
  width: 38.06px;
  height: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  margin-right: 1em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const alarm = css`
  display: inline-flex;
  width: 100%;
  padding: 2em 0;
  cursor: pointer;
  text-align: left;
  section {
    width: 100%;
    h4 {
      font-size: 1.2em;
      color: #000;
      margin-bottom: 0.2em;
      font-weight: 700;
    }
    p {
      font-size: 1.2em;
      line-height: 1.25;
      color: #000;
      margin-top: 0.5em;
      margin-bottom: 0.2em;
    }
    span {
      font-size: 1em;
      color: #c4c4c4;
    }
  }
`;

export const Icon = css`
  text-align: center;
  width: 39.06px;
  height: 30px;
  overflow: hidden;
  margin-top: 0.3em;
  margin-right: 1em;
  img {
    width: 70%;
  }
`;
