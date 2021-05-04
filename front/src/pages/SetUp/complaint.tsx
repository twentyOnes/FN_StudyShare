import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import { Complaint, Submit, Back, TextBox } from "./styles";

const SetUp: React.FC = () => {
  return (
    <div>
      <Header />
      <Complaint>
        <Back>
          <button type="button">
            <img
              src={process.env.PUBLIC_URL + "/images/header_back.svg"}
              alt="뒤로가기"
            />
          </button>
        </Back>
        <TextBox type="textarea" className="complaint__text" />

        <Submit>
          <button type="submit">불편신고 접수하기</button>
        </Submit>
      </Complaint>
      <Fnb />
    </div>
  );
};

export default SetUp;
