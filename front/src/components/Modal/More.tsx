import React from "react";
import "./styles.scss";

const MoreModal = () => {
  return (
    <div className="modal">
      <div className="modal__box">
        <button className="back">더보기</button>
        <button>댓글 수정</button>
        <button>댓글 삭제</button>
      </div>
    </div>
  );
};

export default MoreModal;
