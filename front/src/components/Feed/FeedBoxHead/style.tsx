import { css } from "@emotion/react";

// 피드 헤더
export const Head = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0.625em 0;
  .left {
    display: flex;
    align-items: center;
  }
`;

export const Profile = css`
  width: 2.3em;
  height: 2.3em;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 0.625em;
  overflow: hidden;
  border: 0 solid #000;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Nickname = css`
  font-size: 0.85em;
  font-weight: 600;
`;

export const MoreBtn = css`
  img {
    width: 70%;
  }
`;
