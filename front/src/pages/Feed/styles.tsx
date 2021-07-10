import styled from "@emotion/styled";

export const WriteWrap = styled.div`
  padding: 0 1.5625em;
  margin-bottom: 6em;
`;

export const PhotoAddBtn = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.625em;
  }
  svg {
    vertical-align: middle;
  }
`;

export const PhotoAdd = styled.div`
  width: 100%;
  background: #e4e4e4;
  display: flex;
  margin: 1.375em 0;
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .square {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  button {
    position: absolute;
    &:nth-of-type(1) {
      right: 1em;
      top: 1em;
    }
    &:nth-of-type(2) {
      right: 1em;
      top: 45%;
    }
  }
`;

export const TextAdd = styled.div`
  width: 100%;
  border-top: 0.5px solid #000000;
  h3 {
    margin: 1.375em 0 0;
    font-size: 1rem;
    font-weight: 700;
    color: #2656ff;
  }
  textarea {
    width: 100%;
    height: 6.25em;
    border: none;
    resize: none;
  }
`;
