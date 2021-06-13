import React from "react";
import { Item, Subject, State } from "./styles";

const TodoListItem: React.FC = () => {
  return (
    <Item>
      <State>
        <svg
          width="40"
          height="40"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="35" cy="35" r="35" fill="#E4E4E4" />
          <path
            d="M24.7417 44.5L36 25L47.2583 44.5H24.7417Z"
            stroke="#34A300"
            strokeWidth="3"
          />
        </svg>
      </State>
      <Subject>
        <span>13:00 - 14:00</span>
        <h4>한국사</h4>
      </Subject>
      <p>1단원 - 5단원</p>
    </Item>
  );
};

export default TodoListItem;
