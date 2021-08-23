import React, { useState, useCallback } from "react";
import { Comment, Profile } from "./style";

type Props = {
  nickname: string;
  text: string;
  time: number;
  like: number;
  comment: number;
  className?: string;
};

const FeedComment: React.FC<Props> = ({
  nickname,
  text,
  time,
  like,
  comment,
  className = "replayComment",
}) => {
  const [isLike, setIsLike] = useState(false);

  const onToggleLike = useCallback(() => {
    setIsLike((prev) => !prev);
  }, []);

  return (
    <div css={Comment}>
      <div css={Profile}>
        <img src="/images/feed/frodo.jpg" alt="프로도" />
      </div>

      <div className="comment">
        <div className="user">
          <h2>@{nickname}</h2>
          <div className="user__desc">
            <p>{text}</p>
            <button type="button" onClick={onToggleLike}>
              {isLike ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 42 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9998 38.4792L17.979 35.7292C7.24984 26 0.166504 19.5833 0.166504 11.7083C0.166504 5.29167 5.20817 0.25 11.6248 0.25C15.2498 0.25 18.729 1.9375 20.9998 4.60417C23.2707 1.9375 26.7498 0.25 30.3748 0.25C36.7915 0.25 41.8332 5.29167 41.8332 11.7083C41.8332 19.5833 34.7498 26 24.0207 35.75L20.9998 38.4792Z"
                    fill="#e74152"
                  />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 42 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9998 38.4792L17.979 35.7292C7.24984 26 0.166504 19.5833 0.166504 11.7083C0.166504 5.29167 5.20817 0.25 11.6248 0.25C15.2498 0.25 18.729 1.9375 20.9998 4.60417C23.2707 1.9375 26.7498 0.25 30.3748 0.25C36.7915 0.25 41.8332 5.29167 41.8332 11.7083C41.8332 19.5833 34.7498 26 24.0207 35.75L20.9998 38.4792Z"
                    fill="#999999"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="user__more">
          <div className="user__more--left">
            <span>{time}분 전</span>
            <button>답글 쓰기</button>
            <strong>좋아요 {like}개</strong>
          </div>

          <button type="button" className="user__more--btn">
            <svg
              width="15"
              height="6"
              viewBox="0 0 22 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.26628 0.600098C1.79961 0.600098 0.599609 1.8001 0.599609 3.26676C0.599609 4.73343 1.79961 5.93343 3.26628 5.93343C4.73294 5.93343 5.93294 4.73343 5.93294 3.26676C5.93294 1.8001 4.73294 0.600098 3.26628 0.600098ZM19.2663 0.600098C17.7996 0.600098 16.5996 1.8001 16.5996 3.26676C16.5996 4.73343 17.7996 5.93343 19.2663 5.93343C20.7329 5.93343 21.9329 4.73343 21.9329 3.26676C21.9329 1.8001 20.7329 0.600098 19.2663 0.600098ZM11.2663 0.600098C9.79961 0.600098 8.59961 1.8001 8.59961 3.26676C8.59961 4.73343 9.79961 5.93343 11.2663 5.93343C12.7329 5.93343 13.9329 4.73343 13.9329 3.26676C13.9329 1.8001 12.7329 0.600098 11.2663 0.600098Z"
                fill="#999999"
              />
            </svg>
          </button>
        </div>

        <div className={className}>
          <button type="button">답글 {comment}개 보기</button>
        </div>
      </div>
    </div>
  );
};

export default FeedComment;
