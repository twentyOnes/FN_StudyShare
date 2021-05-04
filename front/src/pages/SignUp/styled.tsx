import styled from "@emotion/styled";

export const CompleteWrap = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  div {
    width: 100vw;
  }
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
