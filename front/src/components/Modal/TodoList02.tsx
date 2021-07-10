import React from "react";
import Button from "../Common/Button";
import { Modal, TodoInput, TodoState, TodoWrap } from "./styles";

const TodoList02: React.FC = () => {
  return (
    <>
      <Modal>
        <div className="modal__wrap">
          <div className="modal__box todoIcon">
            <TodoWrap>
              <TodoState>
                <p className="date">21.01.01</p>
                <button type="button" className="fail">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="30"
                      fill="#C4C4C4"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M32.1752 31.1328L40.3033 39.261L38.4755 41.0889L30.3473 32.9607L22.1024 41.2056L20.2357 39.3388L28.4805 31.0939L20.3523 22.9657L22.1802 21.1379L30.3084 29.2661L38.5921 20.9823L40.4589 22.8491L32.1752 31.1328Z"
                      fill="#A9A9A9"
                    />
                  </svg>
                </button>
                <button type="button" className="almost">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="30"
                      fill="#C4C4C4"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M18.3413 38.0996L29.5996 18.5996L40.8579 38.0996H18.3413Z"
                      stroke="#34A300"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
                <button type="button" className="success">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="30"
                      fill="#C4C4C4"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M16.5996 29.4404L27.8663 41.4004L42.5996 18.4004"
                      stroke="#2656FF"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
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

export default TodoList02;
