import React from "react";
import { Modal } from "./styles";

// eslint-disable-next-line
type Props = { onClose?: any };

// eslint-disable-next-line
const MoreModal = ({ onClose }: Props) => {
  return (
    <>
      <Modal className="modal">
        <div className="modal__wrap">
          <div className="modal__box">
            <div className="modal__more">
              <button className="back" onClick={onClose}>
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 20 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.45 3.45L16.5 0.5L0 17L16.5 33.5L19.45 30.55L5.9 17L19.45 3.45Z"
                    fill="black"
                  />
                </svg>
                <h3>더보기</h3>
              </button>
            </div>

            <div className="modal__btn">
              <button className="subBtn">댓글 수정</button>
              <button className="subBtn delete">댓글 삭제</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MoreModal;
