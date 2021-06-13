import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import { TodoWrap } from "./styles";
import TodoHeader from "@src/components/Todo/TodoHeader";
import TodoGoal from "@src/components/Todo/TodoGoal";
import TodoList from "@src/components/Todo/TodoList";
import TodoComment from "@src/components/Todo/TodoComment";
import TodoListItem from "@src/components/Todo/TodoListItem";

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
