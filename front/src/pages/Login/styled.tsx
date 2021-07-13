import styled from "@emotion/styled";

export const LoginForm = styled.form`
  display: grid;
  text-align: center;
  place-items: center;
  min-height: 100vh;
  position: relative;
  padding: 0.6em 1.5625em;
`;
export const Button = styled.button`
  width: 100%;
  background: #2656ff;
  border-radius: 8px;
  color: #fff;
  margin-top: 1.5em;
  font-size: 0.87em;
  a {
    width: 100%;
    display: block;
    padding: 1em;
    &:hover {
      color: #fff;
    }
  }
`;
export const Input = styled.input`
  border: 1px solid #2656ff;
  border-radius: 4px;
  color: #a6a6a6;
  font-size: 0.85em;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
  &.id {
    margin-bottom: 1em;
  }
`;
export const LoginLink = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 1.25em;
  font-size: 0.8rem;
  li {
    position: relative;
    a {
      color: #4b4b4b;
      &.signup {
        color: #2656ff;
      }
    }
  }
`;
export const Logo = styled.h1`
  line-height: 0;
  img {
    width: 50%;
    margin-bottom: 1em;
  }
`;
export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: 35px;
  img {
    width: 60%;
  }
`;
