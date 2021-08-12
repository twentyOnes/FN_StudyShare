import { css } from "@emotion/react";
import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/global-styles";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyles}
      <div css={layout}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;

const layout = css`
  height: 100vh;
  width: 100%;
  border: 1px solid #dbdbdb;
  background: #fff;
  overflow-y: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;
