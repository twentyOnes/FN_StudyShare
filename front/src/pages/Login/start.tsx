import React from "react";
import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    text-align: center;
    img {
      width: 50%;
    }
  }
`;

const Start: React.FC = () => {
  return (
    <>
      <Wrap>
        <h1>
          <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="로고" />
        </h1>
      </Wrap>
    </>
  );
};

export default Start;
