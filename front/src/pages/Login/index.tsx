import React from "react";
import { Link } from "react-router-dom";
import {
  LoginForm,
  Input,
  Button,
  LoginLink,
  Logo,
  CloseButton,
} from "./styled";

const Login = ({ children }: any) => {
  return (
    <LoginForm>
      <div className="wrap">
        <Logo>
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="로고" />
        </Logo>
        <Input placeholder="아이디 입력" name="id" type="id" className="id" />
        <Input placeholder="비밀번호 입력" name="password" type="password" />
        <Button type="submit">로그인</Button>

        <LoginLink>
          <li>
            <Link to="/">아이디 찾기</Link>
          </li>
          <li className="center">
            <Link to="/">비밀번호 찾기</Link>
          </li>
          <li>
            <Link to="/signup" className="signup">
              회원가입
            </Link>
          </li>
        </LoginLink>
      </div>
      <CloseButton type="button">
        <img src={process.env.PUBLIC_URL + "/btn_close.svg"} alt="화면닫기" />
      </CloseButton>
    </LoginForm>
  );
};

export default Login;
