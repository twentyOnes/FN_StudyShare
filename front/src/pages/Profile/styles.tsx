import styled from "@emotion/styled";

// 뒤로가기 버튼
export const Back = styled.div`
  margin-top: 1.325em;
  img {
    width: 70%;
    vertical-align: middle;
  }
`;
export const ProfileWrapPadding = styled.div`
  padding: 0.6em 1.5625em 10em;
`;

export const ProfileWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

// 입력창
export const InputWrap = styled.form`
  margin-top: 2em;
  div {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    margin: 10px 0;
    align-items: center;
    &.separation {
      display: flex;
      flex-direction: column;
      label {
        margin-top: 0.5em;
      }
      textarea {
        margin-top: 1.4em;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        resize: none;
        padding: 1em;
        box-sizing: border-box;
      }
    }
  }
  label {
    font-size: 0.875em;
    width: 100%;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    height: 1.875em;
    padding: 1.2em;
    box-shadow: none;
    text-shadow: none;
  }

  button {
    color: #2656ff;
    margin-top: 2em;
  }
`;

//프로필 이미지 설정하기
export const ProfileImg = styled.button`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: #e4e4e4;
  position: relative;
  padding: 1.25em 0;
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
