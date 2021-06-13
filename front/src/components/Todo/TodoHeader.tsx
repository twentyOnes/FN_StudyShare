import React from "react";
import { Back } from "./styles";

type Props = {
  name: string;
};

const TodoHeader: React.FC<Props> = ({ name }: Props) => {
  return (
    <Back>
      <button type="button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 17 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 30L1 15.5L16 1"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <strong>{name}님의 day to do</strong>
    </Back>
  );
};

export default TodoHeader;
