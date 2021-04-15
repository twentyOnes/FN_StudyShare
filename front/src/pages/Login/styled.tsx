import styled from "@emotion/styled";

export const LoginForm = styled.section`
  display: grid;
  text-align: center;
  place-items: center;
  min-height: 100vh;
  position: relative;
`;
export const Button = styled.button`
  width: 100%;
  padding: 1em;
  background: #2656ff;
  border-radius: 8px;
  color: #fff;
  margin-top: 1.5em;
  font-size: 0.87em;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  margin-top: 20px;
  font-size: 0.8rem;
  li {
    position: relative;
    a {
      color: #4b4b4b;
      &.signup {
        color: #2656ff;
      }
    }
    &:nth-child(1) {
      text-align: left;
      margin-left: 6px;
    }
    &:nth-child(2) {
      text-align: center;
      margin-left: 7px;
      width: 100%;
    }
    &:nth-child(3) {
      text-align: right;
      margin-right: 6px;
    }
  }
`;

export const Logo = styled.h1`
  line-height: 0;
  img {
    width: 80%;
    margin-bottom: 1em;
  }
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  right: -10px;
  top: 35px;
  background-image: "";
  img {
    width: 60%;
  }
`;
