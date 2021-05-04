import styled from "@emotion/styled";
import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 320px)",
  "@media(min-width: 375px)",
  "@media(min-width: 414px)",
]);

export const Back = styled.div`
  margin-top: 1.325em;
  img {
    width: 70%;
    vertical-align: middle;
  }
`;

export const TextBox = styled.textarea`
  margin-top: 2.375em;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3125em;
  height: 40vh;
  resize: none;
  padding: 1em;
  box-sizing: border-box;
`;

export const Submit = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Click = styled("button")`
  background: #2656ff;
  border-radius: 1.875em;
  color: white;
  padding: 0.5625em 0;
  margin-top: 1.5em;
  font-size: 0.875em;
  ${mq({
    textAlign: "center",
    width: ["40%", "55%", "48%", "42%"],
  })};
`;
