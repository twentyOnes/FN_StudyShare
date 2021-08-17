import { css } from "@emotion/react";

export const loginWrap = css`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  flex-wrap: wrap;
`;

export const loginForm = css`
  text-align: center;
  place-items: center;
  min-height: 100vh;
  position: relative;
  padding: 0.6em 1.5625em;
`;

export const Logo = css`
  margin-top: 12em;
  img {
    width: 50%;
    margin-bottom: 7em;
  }
`;

export const Input = css`
  border: 1px solid #2656ff;
  border-radius: 4px;
  color: #a6a6a6;
  font-size: 1.3rem;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
  &.id {
    margin-bottom: 1em;
  }
`;

export const Button = css`
  width: 100%;
  background: #2656ff;
  border-radius: 8px;
  color: #fff;
  margin-top: 1.5em;
  font-size: 1.3rem;
  width: 100%;
  display: block;
  padding: 1em;
`;

export const LoginLink = css`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 1.25em;
  font-size: 1.3rem;
  padding: 0 8em;
  li {
    position: relative;
    a {
      color: #4b4b4b;
    }
  }
`;

export const CloseButton = css`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: 35px;
  img {
    width: 60%;
  }
`;
