import React from "react";
import Button from "../Common/Button";
import { Modal, TodoInput } from "./styles";

const TodoList01: React.FC = () => {
  return (
    <>
      <Modal>
        <div className="modal__wrap">
          <div className="modal__box input">
            <TodoInput>
              <input type="text" className="todo__title" />
              <textarea className="todo__text" />
            </TodoInput>

            <Button preBtnNm="삭제하기" nextBtnNm="저장하기" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TodoList01;
