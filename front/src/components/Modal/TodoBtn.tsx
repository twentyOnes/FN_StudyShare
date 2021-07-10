import React from "react";

const TodoBtn: React.FC = () => {
  return (
    <>
      <button type="button" className="fail">
        <img
          src={process.env.PUBLIC_URL + "/images/todo_icon01.svg"}
          alt="진행 안됨"
        />
      </button>
      <button type="button" className="almost">
        <img
          src={process.env.PUBLIC_URL + "/images/todo_icon02.svg"}
          alt="조금 완료"
        />
      </button>
      <button type="button" className="success">
        <img
          src={process.env.PUBLIC_URL + "/images/todo_icon03.svg"}
          alt="완료"
        />
      </button>
    </>
  );
};

export default TodoBtn;
