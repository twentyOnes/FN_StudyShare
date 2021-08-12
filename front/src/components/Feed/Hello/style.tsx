import { css } from "@emotion/react";

export const Card = css`
  border-radius: 0.31em;
  background: #ffffff;
  padding: 2.5em 2em;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;

export const Hello = css`
  color: #2656ff;
  font-size: 1.75rem;
  line-height: 2.2rem;
  font-weight: 400;
  .highlight {
    display: inline-block;
    position: relative;
    z-index: 9;
    font-weight: 700;
    &:before {
      content: "";
      width: 100%;
      height: 10px;
      display: inline-block;
      background: #ffc2ba;
      position: absolute;
      bottom: 2px;
      opacity: 0.8;
      left: 0;
      z-index: -1;
    }
  }
`;
export const Goal = css`
  margin: 2em 0 1em 0;
  .date {
    font-size: 1.2rem;
    color: #999999;
  }
  h3 {
    padding: 0.3em 0 0.5em;
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 0;
  }
  .ant-progress-text {
    font-size: 0.8em;
  }
`;
