import styled from "@emotion/styled";

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
  z-index: 100;
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
      &.input {
        padding-bottom: 18px;
      }
      &.todoIcon {
        padding-bottom: 18px;
      }
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
        font-weight: 800;
        margin-bottom: 0;
        margin-left: 1em;
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

export const TodoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input,
  textarea {
    width: 80%;
  }
  .todo__title {
    border: 0.5px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 1em;
    padding: 5px 14px;
    margin-top: 0.8125em;
  }
  .todo__text {
    border: 0.5px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 14px;
    height: 20vh;
    resize: none;
  }
  .time {
    text-align: left;
    width: 80%;
    font-weight: 800;
    color: #999999;
    margin-left: 3em;
    font-size: 1em;
  }
`;

export const TodoState = styled.div`
  display: grid;
  .date {
    text-align: center;
    font-weight: 800;
    font-size: 1em;
  }
`;

export const TodoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1.1875em 0;
`;
