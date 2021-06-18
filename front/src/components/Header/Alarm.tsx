import React from "react";
import { AlarmHeader, AlarmWrap, Back, Title } from "./styles";

type Props = {
  title?: string;
};

const alarm: React.FC<Props> = ({ title }: Props) => {
  return (
    <AlarmHeader>
      <AlarmWrap>
        <Back>
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
