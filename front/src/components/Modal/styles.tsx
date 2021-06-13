import styled from "@emotion/styled";

// 알림 페이지 헤더
export const Modal = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  .modal {
    &__wrap {
      max-width: 600px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__box {
      box-sizing: border;
      overflow: hidden;
      width: 77%;
      background: #ffffff;
      border-radius: 0.625em;
    }
    &__more {
      width: 100%;
      border-bottom: 1px solid #e4e4e4;
      padding: 1.0625em 1em;
      display: flex;
      align-items: center;
      button {
        margin-right: 1em;
        align-items: center;
        height: 100%;
        display: flex;
      }
      h3 {
        font-size: 1.1em;
        font-weight: 700;
      }
    }
    &__btn {
      display: grid;
      grid-template-rows: auto auto;
      button {
        padding: 1.0625em;
        font-size: 1em;
        &.delete {
          color: red;
        }
      }
    }
  }
`;
