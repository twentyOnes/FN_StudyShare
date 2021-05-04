import React from 'react';
import styled from '@emotion/styled';

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  vertical-align: middle;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1em;
`;

const AlarmWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`;

const Back = styled.button`
  vertical-align: middle;
  img {
    width: 70%;
    vertical-align: middle;
  }
`;
const Title = styled.h1`
  vertical-align: middle;
  font-size: 1.325em;
  font-weight: 700;
  margin-left: 0.7em;
  display: inline-block;
`;

type Props = {
  title?: string;
};

// eslint-disable-next-line
const alarm = ({ title }: Props) => {
  return (
    <HeaderLayout>
      <AlarmWrap>
        <Back>
          <img src={process.env.PUBLIC_URL + '/header_back.svg'} alt="뒤로가기" />
        </Back>

        <Title>{title}</Title>
      </AlarmWrap>
    </HeaderLayout>
  );
};

export default alarm;
