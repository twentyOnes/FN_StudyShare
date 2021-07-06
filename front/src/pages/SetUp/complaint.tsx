import React from "react";
import Header from "@src/components/Header";
import Fnb from "@src/components/Fnb";
import { useHistory } from "react-router-dom";

import { Submit, Back, TextBox, Click, ComplaintWrap } from "./styles";

const SetUp: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <ComplaintWrap>
        <Back type="button" onClick={() => history.goBack()}>
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
