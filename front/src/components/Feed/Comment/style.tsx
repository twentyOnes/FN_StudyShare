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

//피드 댓글창
export const Comment = css`
  width: 100%;
  display: grid;
  padding-top: 0.625em;
  ${mq({
    gridTemplateColumns: [
      "0.5fr 4fr",
      "0.5fr 4fr",
      "0.2fr 4fr",
      "0.2fr 4fr",
      "0.2fr 4fr",
    ],
  })};
  .comment {
    .user {
      h2 {
        font-size: 0.9em;
        font-weight: 700;
        color: #000000;
      }
      p {
        font-size: 0.8em;
        font-weight: 500;
        color: #000000;
      }
      &__desc {
        display: flex;
        justify-content: space-between;
        padding-top: 0.3em;
        button {
          height: 100%;
        }
        p {
          padding-right: 1em;
        }
      }
      &__more {
        display: flex;
        justify-content: space-between;
        align-content: center;
        vertical-align: middle;
        padding: 0.5em 0;
        span {
          color: #c4c4c4;
          font-size: 0.8em;
          margin-right: 1em;
        }
        button {
          font-size: 0.8em;
          font-weight: 700;
        }
        strong {
          font-size: 0.8em;
          font-weight: 700;
          margin-left: 1em;
        }
      }
    }
    .replayComment {
      padding: 0.375em 0;
      button {
        color: #c4c4c4;
        font-size: 0.8em;
        &:before {
          content: "";
          display: inline-block;
          margin: 4px 12px 3.5px 0;
          width: 48px;
          height: 2px;
          background: rgba(0, 0, 0, 0.4);
        }
      }
      &.none {
        button {
          display: none;
        }
      }
    }
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
