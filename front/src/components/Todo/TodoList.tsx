import React from "react";
import { TodoListBox } from "./styles";

type Props = {
  title: string;
};
const TodoList: React.FC<Props> = ({ title }: Props) => {
  return (
    <TodoListBox>
      <h3>{title}</h3>
      <button type="button">
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#2656FF" />
          <path
            d="M25.9231 24.42H32.8881V26.905H25.9231V34.115H23.4031V26.905H16.4381V24.42H23.4031V17.175H25.9231V24.42Z"
            fill="white"
          />
        </svg>
      </button>
    </TodoListBox>
  );
};

export default TodoList;
