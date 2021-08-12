import { css } from "@emotion/react";

const StartLoading = () => {
  return (
    <>
      <main css={startLoadingWrap}>
        <h1>
          <img src="/images/common/logo.svg" alt="로고" />
        </h1>
      </main>
    </>
  );
};

export default StartLoading;

export const startLoadingWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    text-align: center;
    img {
      width: 50%;
    }
  }
`;
