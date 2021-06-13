import React from "react";
import { Goal } from "./styles";
import { Progress } from "antd";

const TodoGoal: React.FC = () => {
  return (
    <Goal>
      <span className="date">21. 03. 14</span>
      <h3>오늘의 달성도</h3>
      <Progress percent={30} strokeColor="2656ff" />
    </Goal>
  );
};

export default TodoGoal;
