import { css } from "@emotion/react";
import Link from "next/link";

const Start = () => {
  return (
    <>
      <main css={startWrap}>
        <div className="completeSuccess">
          <p>
            회원가입이 완료되었습니다. <br />
            <b>Study Share</b>와 함께
            <br />
            계획적으로 스터디를 관리하세요!
          </p>

          <Link href="./feed">
            <a>Study Share 시작하기</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Start;

export const startWrap = css`
  display: flex;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 2.4em;
  p {
    font-size: 3rem;
    margin-bottom: 1.3em;
    font-weight: 300;
    line-height: 1.5;
    b {
      color: #2656ff;
      font-weight: 700;
    }
  }
  .completeSuccess {
    width: 100%;
  }
  a {
    width: 80%;
    background: #2656ff;
    border-radius: 4px;
    color: #fff;
    font-size: 2rem;
    display: inline-block;
    font-weight: 700;
    padding: 1em 0;
    margin-top: 16px;
  }
`;
