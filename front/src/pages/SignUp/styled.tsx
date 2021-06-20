import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  padding: 0.6em 2.125em;
  height: 100%;
  h1 {
    font-weight: bold;
    margin: 2em 0;
    font-size: 1.125rem;
  }
  form {
    position: relative;
    height: 100%;
  }
`;

// 회원가입 완료 페이지
export const CompleteWrap = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.25em;
    margin-bottom: 1.3em;
    font-weight: 300;
    line-height: 1.5;
    b {
      color: #2656ff;
      font-weight: 700;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 1em;
  background: #2656ff;
  border-radius: 8px;
  color: #fff;
  font-size: 1em;
  font-weight: 700;
`;
// 회원가입 페이지
export const Header = styled.header`
  margin-top: 2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back {
    width: 15px;
    height: 30px;
    img {
      width: 70%;
    }
  }
  .close {
    width: 20px;
    height: 20px;
    img {
      width: 70%;
    }
  }
`;
export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: grid;
`;
export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #2656ff;
  padding: 13px;
  font-size: 0.9em;
`;

export const BirthBox = styled.div`
  margin-bottom: 0.625em;
  display: grid;
  grid-template-columns: auto;
  margin-top: 1em;
`;

export const PasswordBox = styled.div`
  margin-bottom: 0.625em;
  display: grid;
  grid-template-columns: auto;
  &.blank {
    margin-top: 1em;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 18px;
    height: 18px;
    margin-left: 0.6em;
    cursor: pointer;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 0.625em;
  display: grid;
  grid-template-columns: auto 7em;
  input:nth-of-type(1) {
    justify-self: start;
    width: 100%;
  }
  input:nth-of-type(2) {
    justify-self: end;
  }
  &.nickname {
    margin-top: 1em;
  }
`;

export const InputButton = styled.button`
  background: #2656ff;
  color: #fff;
  font-size: 0.9em;
  padding: 13px;
  border-radius: 4px;
  z-index: 100;
  height: 100%;
  margin-left: -6px;
`;
export const SignButton = styled.button`
  background: #c4c4c4;
  color: #fff;
  font-size: 0.9em;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  position: absolute;
  bottom: 5%;
`;
