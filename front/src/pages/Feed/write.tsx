import React from 'react';
import Header from '../../components/Header';
import Fnb from '../../components/Fnb';
import TwoButton from '../../components/Common/TwoBtn';
import styled from '@emotion/styled';

const WriteWrap = styled.div`
  padding: 0 1.5625em;
`;

const Write: React.FC = () => {
  return (
    <>
      <Header />
      <WriteWrap>
        <TwoButton preBtnNm="삭제하기" nextBtnNm="저장하기" link01="/" link02="#this" />
      </WriteWrap>

      <Fnb />
    </>
  );
};

export default Write;
