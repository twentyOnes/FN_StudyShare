import React from "react";
import {
  InputWrap,
  Input,
  InputButton,
  Header,
  SignButton,
  SignUpWrap,
  InputBox,
  PasswordBox,
  CheckBox,
} from "./styled";

const SignUp: React.FC = () => {
  return (
    <SignUpWrap>
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

        <h1>회원가입</h1>

        <InputWrap>
          <InputBox>
            <Input placeholder="아이디를 입력해주세요." required />
            <InputButton type="button" name="name">
              중복확인
            </InputButton>
          </InputBox>

          <PasswordBox>
            <Input
              placeholder="비밀번호 6글자 이상.(영문, 숫자, 특수문자중 2포함)"
              type="password"
              required
            />
          </PasswordBox>

          <PasswordBox>
            <Input placeholder="비밀번호 확인." type="password" required />
          </PasswordBox>

          <InputBox>
            <Input placeholder="닉네임을 입력해주세요." required />
            <InputButton>중복확인</InputButton>
          </InputBox>

          <InputBox>
            <Input placeholder="생년월일을 입력해주세요." required />
            <InputButton>중복확인</InputButton>
          </InputBox>
        </InputWrap>
        <CheckBox>
          <p>이용 약관에 동의합니다</p>
          <Input type="checkbox" required />
        </CheckBox>
        <SignButton type="submit">
          <p>가입하기</p>
        </SignButton>
      </form>
    </SignUpWrap>
  );
};

export default SignUp;
