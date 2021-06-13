import styled from "@emotion/styled";
import facepaint from "facepaint";

//디바이스 미디어쿼리
const mq = facepaint([
  "@media(min-width: 320px)",
  "@media(min-width: 375px)",
  "@media(min-width: 414px)",
  "@media(min-width: 720px)",
  "@media(min-width: 1024px)",
]);

// 피드 헤더
export const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0.625em 0;
  .left {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
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

export const Nickname = styled.p`
  font-size: 0.85em;
  font-weight: 600;
`;

export const MoreBtn = styled.button`
  img {
    width: 70%;
  }
`;

// Feed 이미지
export const Feed = styled.div`
  padding: 0.6em 1.5625em; ;
`;

// Feed 슬라이드 이미지 사이즈
export const FeedImg = styled.div`
  width: 100%;
  .slick-slider {
    width: 100%;
  }
  .slick-list {
    width: 100%;
    div {
      height: 50vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .slick-dots {
    position: static;
  }
  .slick-prev,
  .slick-next {
    top: 47%;
  }
  .slick-dots li.slick-active button:before {
    color: #2656ff !important;
    opacity: 1 !important;
  }
  .slick-dots li {
    margin: 0 !important;
  }
  .slick-arrow {
    z-index: 10;
  }
  .slick-prev {
    left: 12px;
    &:before {
      opacity: 0.6;
      color: #fff;
      font-size: 28px;
    }
  }
  .slick-next {
    right: 19px;
    &:before {
      opacity: 0.6;
      color: #fff;
      font-size: 28px;
    }
  }
`;

// 피드게시물 좋아요 + 글작성시간 헤더
export const LikeHead = styled.div`
  padding: 0.6em 0 0;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 0.4375em;
    vertical-align: middle;
  }
  p,
  span {
    font-size: 0.75em;
    font-weight: 500;
  }
  p {
    color: #999999;
  }
`;

// 피드 게시글
export const Text = styled.div`
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

// 피드 댓글 더보기
export const CommentMore = styled.button`
  cursor: pointer;
  margin-top: 0.6em;
  margin-bottom: 0.5625em;
  span {
    color: #c4c4c4;
    font-size: 0.9em;
  }
`;

//피드 댓글창
export const Comment = styled.div`
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

// 대댓글
export const ReplayComent = styled.div`
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

// 대댓글
export const CommentInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
  align-items: center;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 92.5%;
`;

// 댓글 입력창
export const Input = styled.input`
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
export const Button = styled.button`
  position: absolute;
  right: 11px;
  top: 11px;
  color: #2656ff;
`;

export const FeedHeadWrap = styled.div`
  padding: 0.6em 1.5625em;
`;
//오늘의 달성도
export const Card = styled.div`
  border-radius: 0.31em;
  background: #ffffff;
  padding: 1.5625em;
  margin-bottom: 1.4625em;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;

export const Hello = styled.p`
  color: #2656ff;
  font-size: 1.1em;
  line-height: 1.4em;
  font-weight: 400;
  .highlight {
    display: inline-block;
    position: relative;
    z-index: 9;
    &:before {
      content: "";
      width: 100%;
      height: 12px;
      display: inline-block;
      background: #ffc2ba;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;
export const Goal = styled.div`
  margin-top: 1em;
  .date {
    font-size: 0.8em;
    color: #999999;
  }
  h3 {
    margin-top: 0.2em;
    font-weight: 700;
    font-size: 1.1em;
    margin-bottom: 0;
  }
  .ant-progress-text {
    font-size: 0.8em;
  }
`;

export const WriteButton = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  bottom: 70px;
  .writeWrap {
    display: grid;
    justify-items: end;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;
