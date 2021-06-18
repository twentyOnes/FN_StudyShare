import React from "react";
import Header from "@src/components/Header";
import Fnb from "@src/components/Fnb";
import TodoHeader from "@src/components/Todo/TodoHeader";
import TodoGoal from "@src/components/Todo/TodoGoal";
import TodoList from "@src/components/Todo/TodoList";
import TodoComment from "@src/components/Todo/TodoComment";
import TodoListItem from "@src/components/Todo/TodoListItem";

import { TodoWrap } from "./styles";

const Todo: React.FC = () => {
  return (
    <div>
      <Header />
      <TodoWrap>
        <TodoHeader name="둘리" />
        <TodoGoal />

        <TodoList title="To do list">
          <TodoListItem />
        </TodoList>

        <TodoList title="Today’s comment">
          <TodoComment />
        </TodoList>

        <Fnb />
      </TodoWrap>
    </div>
  );
};

export default Todo;
