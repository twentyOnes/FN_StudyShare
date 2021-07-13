import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoginForm,
  Input,
  Button,
  LoginLink,
  Logo,
  CloseButton,
} from "./styled";

const Login: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      window.location.href = "/home";
      e.preventDefault;
      console.log(id, password);
    },
    [id, password]
  );

  return (
    <LoginForm>
      <div className="wrap">
        <Logo>
          <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="로고" />
        </Logo>
        <Input
          placeholder="아이디 입력"
          name="id"
          type="id"
          className="id"
          value={id}
          onChange={onChangeId}
        />
        <Input
          placeholder="비밀번호 입력"
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <Button type="submit" onClick={onSubmitForm}>
          <Link to="/">로그인</Link>
        </Button>

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
        <img
          src={process.env.PUBLIC_URL + "/images/btn_close.svg"}
          alt="화면닫기"
        />
      </CloseButton>
    </LoginForm>
  );
};

export default Login;
