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
export const Back = styled.div`
  margin-top: 1.325em;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  align-items: center;
  button {
    text-align: left;
    width: 100%;
  }
  img {
    width: 70%;
    vertical-align: middle;
  }
  strong {
    width: 100%;
    text-align: left;
    color: #2656ff;
    font-size: 1.5625em;
    line-height: 1.4em;
    font-weight: bolder;
    position: relative;
    z-index: 9;
    &::before {
      content: "";
      width: 58%;
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
