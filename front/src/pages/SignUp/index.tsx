import React from "react";
import { InputWrap, Input, InputButton, Header, SignButton } from "./styled";

const SignUp: React.FC = () => {
  return (
    <>
      <form>
        <Header>
          <button type="button" className="back">
            <img
              src={process.env.PUBLIC_URL + "/images/icon_back.svg"}
              alt="뒤로가기"
            />
          </button>
          <button type="button" className="close">
            <img
              src={process.env.PUBLIC_URL + "/images/btn_close.svg"}
              alt="닫기"
            />
          </button>
        </Header>

        <h1 style={{ margin: "1em 0", fontSize: "1em" }}>회원가입</h1>

        <InputWrap>
          <div>
            <Input placeholder="아이디를 입력해주세요." required />
            <InputButton type="button" name="name">
              중복확인
            </InputButton>
          </div>

          <Input
            placeholder="비밀번호 6글자 이상.(영문, 숫자, 특수문자중 2포함)"
            type="password"
            required
            style={{ marginBottom: "1em" }}
          />
          <Input placeholder="비밀번호 확인." type="password" required />

          <div style={{ margin: "1em 0" }}>
            <Input placeholder="닉네임을 입력해주세요." required />
            <InputButton>중복확인</InputButton>
          </div>
        </InputWrap>

        <SignButton type="submit">가입하기</SignButton>
      </form>
    </>
  );
};

export default SignUp;
