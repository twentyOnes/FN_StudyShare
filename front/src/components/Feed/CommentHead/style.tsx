import { css } from "@emotion/react";

export const LikeHead = css`
  cursor: pointer;
  margin-top: 0.6em;
  margin-bottom: 0.5625em;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    button {
      margin-right: 1em;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    color: #c4c4c4;
    font-size: 0.9em;
  }
`;

export const TextHead = css`
  margin: 1em 0;
`;

// 피드 게시글
export const Text = css`
  width: 100%;
  margin-top: 7px;
  text-align: left;
  align-items: center;
  display: flex;
  .text-width {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    line-height: 1.4;
  }
  span {
    font-size: 0.8em;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #000000;
    display: inline-block;
  }
  button {
    color: #999999;
    cursor: pointer;
    margin-left: 0;
    font-size: 0.9em;
  }
`;
