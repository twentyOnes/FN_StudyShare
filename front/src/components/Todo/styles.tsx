import styled from "@emotion/styled";

//마이페이지 나의 정보 전체보기
export const TodoListBox = styled.div`
  width: 100%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #f2f2f2;
  padding: 1.0625em 1.5625em;
  border-radius: 0.31em;
  margin: 1.3em 0;
  h3 {
    color: #2656ff;
    font-weight: bold;
    font-size: 1em;
  }
  button {
    text-align: right;
    width: 100%;
    display: inline-block;
  }
`;

// 뒤로가기 버튼
export const TodoHeaderTit = styled.div`
  margin-bottom: 2.5em;
  margin-top: 1.325em;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  button {
    text-align: left;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: grid;
  }
  img {
    width: 70%;
    vertical-align: middle;
  }
  strong {
    text-align: left;
    color: #2656ff;
    font-size: 1.5625em;
    line-height: 1.4em;
    font-weight: bolder;
    position: relative;
    z-index: 9;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      width: 100%;
      height: 12px;
      display: inline-block;
      background: #ffc2ba;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;

export const Goal = styled.div`
  margin-top: 1em;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  padding: 1.5625em;
  border-radius: 0.31em;
  .date {
    font-size: 0.8em;
    color: #999999;
  }
  h3 {
    margin-top: 0.2em;
    font-weight: 700;
    font-size: 1.1em;
    margin-bottom: 0;
  }
  .ant-progress-text {
    font-size: 0.8em;
  }
`;

export const Item = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 3.5em 6em auto;
  margin-top: 0.8em;
  p {
    color: #000;
    font-size: 0.75em;
    font-weight: 400;
  }
`;

export const State = styled.div`
  align-items: center;
  display: grid;
`;

export const CommentState = styled.div`
  align-items: start;
  display: grid;
  height: 100%;
`;

export const Subject = styled.div`
  align-items: center;
  display: grid;
  span {
    color: #999999;
    font-size: 0.625em;
    font-weight: 400;
  }
  h4 {
    font-size: 0.825em;
    color: #000;
    font-weight: 700;
  }
`;

export const Comment = styled.div`
  padding-top: 0.6em;
  h4 {
    font-size: 0.825em;
    color: #000;
    font-weight: 700;
  }
  p {
    color: #000;
    font-size: 0.75em;
    font-weight: 400;
  }
`;

export const CommentItem = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 3.5em auto;
  margin-top: 0.8em;
`;
