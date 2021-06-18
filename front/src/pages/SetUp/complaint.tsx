import React from "react";

import Header from "@src/components/Header";
import Fnb from "@src/components/Fnb";

import { Submit, Back, TextBox, Click, ComplaintWrap } from "./styles";

const SetUp: React.FC = () => {
  return (
    <>
      <Header />
      <ComplaintWrap>
        <Back>
          <button type="button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 30L1 15.5L16 1"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Back>

        <form>
          <TextBox />

          <Submit>
            <Click type="submit" value="Submit">
              불편신고 접수하기
            </Click>
          </Submit>
        </form>
      </ComplaintWrap>
      <Fnb />
    </>
  );
};

export default SetUp;
