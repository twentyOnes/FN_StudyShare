import React from "react";
import { AlarmHeader, AlarmWrap, Back, Title } from "./styles";
import { useHistory } from "react-router-dom";

type Props = {
  title?: string;
};

const alarm: React.FC<Props> = ({ title }) => {
  const history = useHistory();

  return (
    <AlarmHeader>
      <AlarmWrap>
        <Back type="button" onClick={() => history.goBack()}>
          <img
            src={process.env.PUBLIC_URL + "/images/header_back.svg"}
            alt="뒤로가기"
          />
        </Back>

        <Title>{title}</Title>
      </AlarmWrap>
    </AlarmHeader>
  );
};

export default alarm;
