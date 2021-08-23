import { css } from "@emotion/react";
import facepaint from "facepaint";

//디바이스 미디어쿼리
const mq = facepaint([
  "@media(min-width: 320px)",
  "@media(min-width: 375px)",
  "@media(min-width: 414px)",
  "@media(min-width: 720px)",
  "@media(min-width: 1024px)",
]);

// 대댓글
export const ReplayComent = css`
  display: grid;
  ${mq({
    gridTemplateColumns: [
      "0.6fr 4fr",
      "0.6fr 4fr",
      "0.6fr 4fr",
      "0.5fr 4fr",
      "0.2fr 4fr",
    ],
  })};
`;

// 피드 댓글 더보기
export const CommentMore = css`
  cursor: pointer;
  margin-top: 0.6em;
  margin-bottom: 0.5625em;
  span {
    color: #c4c4c4;
    font-size: 0.9em;
  }
`;
