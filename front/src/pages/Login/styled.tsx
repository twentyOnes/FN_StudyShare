import styled from "@emotion/styled";

export const LoginForm = styled.main`
  display: grid;
  text-align: center;
  place-items: center;
  min-height: 100vh;
`;
export const Button = styled.button`
  width: 81.4%;
  padding: 1em;
  background: #2656ff;
  border-radius: 4px;
  color: #fff;
  margin-top: 1.5em;
  font-size: 0.87em;
`;
export const Input = styled.input`
  border: 1px solid #2656ff;
  border-radius: 4px;
  color: #b6b3b3;
  font-size: 0.85em;
  padding: 1em;
  margin-bottom: 1em;
  width: 74%;
`;
export const LoginLink = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  padding: 1.5em 2em;
  font-size: 0.9rem;
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
