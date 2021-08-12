import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import React from "react";

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const GlobalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }
      html {
        font-size: 10px;
        /* Prevent font scaling in landscape */
        -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
        -moz-text-size-adjust: none; /*Firefox*/
        -ms-text-size-adjust: none; /*Ie*/
        -o-text-size-adjust: none; /*old versions of Opera*/
      }
      body {
        letter-spacing: -0.025em;
        min-width: 375px;
        margin: 0 auto;
        max-width: 600px;
        min-height: 100%;
        box-sizing: border-box;
        background-color: #fafafa;
      }
      html,
      body,
      #__next {
        height: 100vh;
        width: 100%;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input,
      button {
        cursor: pointer;
        color: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        margin: 0;
        padding: 0;
        -webkit-apprearance: none;
        background: none;
        border: none;
        box-shadow: none;
        border-radius: 0;
        &:focus,
        &:active {
          outline: none;
        }
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .ant-progress-bg {
        height: 15px !important;
        background: #2656ff;
      }
    `}
  />
);
