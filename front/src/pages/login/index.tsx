import {
  loginForm,
  Logo,
  Input,
  Button,
  LoginLink,
  CloseButton,
  loginWrap,
} from "./style";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <main css={loginWrap}>
        <form css={loginForm}>
          <h1 css={Logo}>
            <img src="/images/common/logo.svg" alt="스터디쉐어 로고" />
          </h1>

          <input
            css={Input}
            placeholder="아이디 입력"
            name="id"
            type="id"
            className="id"
          />

          <input
            css={Input}
            placeholder="비밀번호 입력"
            name="password"
            type="password"
          />

          <button type="submit" css={Button}>
            로그인
          </button>

          <ul css={LoginLink}>
            <li>
              <Link href="/">아이디 찾기</Link>
            </li>
            <li className="center">
              <Link href="/">비밀번호 찾기</Link>
            </li>
            <li>
              <Link href="/signup">회원가입</Link>
            </li>
          </ul>

          <button type="button" css={CloseButton}>
            <img src="/images/common/btn_close.svg" alt="화면닫기 버튼" />
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
