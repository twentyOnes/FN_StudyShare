import React from "react";
import { Card, Hello, Signup } from "./style";
import Link from "next/link";

const NonMember = () => {
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
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </div>
    </section>
  );
};

export default NonMember;
