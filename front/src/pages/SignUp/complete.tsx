import React from "react";
import { Button, CompleteWrap } from "./styled";

const SignUpComplete: React.FC = () => {
  return (
    <CompleteWrap>
      <div className="completeSuccess">
        <p>
          회원가입이 완료되었습니다. <br />
          <b>Study Share</b>와 함께
          <br />
          계획적으로 스터디를 관리하세요!
        </p>

        <Button type="button">Study Share 시작하기</Button>
      </div>
    </CompleteWrap>
  );
};

export default SignUpComplete;
