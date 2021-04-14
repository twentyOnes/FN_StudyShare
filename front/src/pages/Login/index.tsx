import React from "react";
import { Link } from "react-router-dom";
import { LoginForm, Input, Button, LoginLink } from "./styled";

const Login = () => {
  return (
    <LoginForm>
      <div className="wrap">
        <Input placeholder="아이디 입력" name="id" type="id" />
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
    </LoginForm>
  );
};

export default Login;
