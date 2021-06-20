import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import TwoButton from "../../components/Common/TwoBtn";
import { WriteWrap, PhotoAddBtn, PhotoAdd, TextAdd } from "./styles";

const Write: React.FC = () => {
  return (
    <>
      <Header />
      <WriteWrap>
        <PhotoAddBtn>
          <button type="button">
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#2656FF" />
              <path
                d="M25.9226 24.42H32.8876V26.905H25.9226V34.115H23.4026V26.905H16.4376V24.42H23.4026V17.175H25.9226V24.42Z"
                fill="white"
              />
            </svg>
          </button>

          <p>사진을 추가해 주세요.</p>
        </PhotoAddBtn>

        <PhotoAdd>
          <div className="square">
            <button type="reset">
              <svg
                width="20"
                height="20"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2082 3.55288L25.4469 0.791626L14.4998 11.7387L3.55275 0.791626L0.791504 3.55288L11.7386 14.5L0.791504 25.447L3.55275 28.2083L14.4998 17.2612L25.4469 28.2083L28.2082 25.447L17.2611 14.5L28.2082 3.55288Z"
                  fill="#999999"
                />
              </svg>
            </button>
            <button type="button">
              <svg
                width="20"
                height="30"
                viewBox="0 0 19 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L18 18L1 35" stroke="black" />
              </svg>
            </button>
          </div>
        </PhotoAdd>

        <TextAdd>
          <h3>feed text</h3>
        </TextAdd>
        <TwoButton
          preBtnNm="삭제하기"
          nextBtnNm="저장하기"
          link01="/"
          link02="#this"
        />
      </WriteWrap>

      <Fnb />
    </>
  );
};

export default Write;
