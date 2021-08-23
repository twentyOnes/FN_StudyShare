import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { LikeHead, Text, TextHead } from "./style";

type Props = {
  like: number;
  time: number;
  text: string;
};

// 피드 게시글 좋아요 + 댓글 + 답글
const FeedCmHead: React.FC<Props> = ({ like, time, text }) => {
  const [isLike, setIsLike] = useState(false);

  const onToggleLike = useCallback(() => {
    setIsLike((prev) => !prev);
  }, []);

  return (
    <div css={TextHead}>
      <div css={LikeHead}>
        <div className="left">
          <button type="button" onClick={onToggleLike}>
            {isLike ? (
              <svg
                width="20"
                height="20"
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
                width="20"
                height="20"
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
          <p>like {like}</p>
        </div>

        <span className="right">{time}분전</span>
      </div>

      <div css={Text}>
        <span className="text-width">{text}</span>
        <span>
          <button type="button">더보기</button>
        </span>
      </div>
    </div>
  );
};

export default FeedCmHead;
