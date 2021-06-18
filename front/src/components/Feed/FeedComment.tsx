import React from "react";
import { Comment, Profile } from "./styles";

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
}: Props) => {
  return (
    <Comment>
      <Profile>
        <img src={process.env.PUBLIC_URL + "/images/frodo.jpg"} alt="프로도" />
      </Profile>

      <div className="comment">
        <div className="user">
          <h2>@{nickname}</h2>
          <div className="user__desc">
            <p>{text}</p>
            <button type="button">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                  fill="#C5C5C5"
                />
              </svg>
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
    </Comment>
  );
};

export default FeedComment;
