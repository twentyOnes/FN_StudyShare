import React from "react";
import Button from "../Common/Button";
import { Modal, TodoInput, TodoState, TodoWrap } from "./styles";
import TodoBtn from "./TodoBtn";

const TodoComent: React.FC = () => {
  return (
    <>
      <Modal>
        <div className="modal__wrap">
          <div className="modal__box todoIcon">
            <TodoWrap>
              <TodoState>
                <p className="date">21.01.01</p>
                <TodoBtn />
              </TodoState>

              <TodoInput>
                <p className="time">00:00 - 00:00</p>
                <input type="text" className="todo__title" />
                <textarea className="todo__text" />
              </TodoInput>
            </TodoWrap>

            <Button preBtnNm="취소하기" nextBtnNm="저장하기" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TodoComent;
