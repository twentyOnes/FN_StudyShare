import { css } from "@emotion/react";

// 대댓글
export const CommentInput = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
  align-items: center;
`;

export const InputWrap = css`
  position: relative;
  width: 92.5%;
`;

// 댓글 입력창
export const Input = css`
  width: 100%;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  &::placeholder {
    color: #c5c5c5;
  }
`;

// 댓글 게시버튼
export const Button = css`
  position: absolute;
  right: 11px;
  top: 11px;
  color: #2656ff;
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