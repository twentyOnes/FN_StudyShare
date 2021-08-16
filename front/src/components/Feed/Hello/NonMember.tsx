import React from "react";
import { Progress } from "antd";
import { Card, Hello, Signup } from "./style";

type Props = {
  user?: string;
};

const NonMember = ({ user }: Props) => {
  return (
    <section css={Card}>
      <div css={Hello}>
        안녕하세요.
        <br />
        <strong className="highlight">로그인 하여</strong> 스터디를
        <br />
        계획하고 공유해보세요!
      </div>

      <div css={Signup}>
        <button type="button">회원가입</button>
        <button type="button">로그인</button>
      </div>
    </section>
  );
};

export default NonMember;
