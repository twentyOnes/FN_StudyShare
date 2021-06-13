import styled from "@emotion/styled";

//마이페이지 나의 정보 전체보기
export const TodoListBox = styled.div`
  width: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  width: 100%;
`;

export const Button = styled.div`
  width: 100%;
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
