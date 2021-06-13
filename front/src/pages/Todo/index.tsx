import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import { TodoWrap } from "./styles";
import TodoHeader from "@src/components/Todo/TodoHeader";
import TodoGoal from "@src/components/Todo/TodoGoal";
import TodoList from "@src/components/Todo/TodoList";

const Todo: React.FC = () => {
  return (
    <div>
      <Header />
      <TodoWrap>
        <TodoHeader name="둘리" />
        <TodoGoal />
        <TodoList title="To do list" />
        <TodoList title="Today’s comment" />
        <Fnb />
      </TodoWrap>
    </div>
  );
};

export default Todo;
