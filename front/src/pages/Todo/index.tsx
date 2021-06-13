import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import { TodoWrap } from "./styles";
import TodoHeader from "@src/components/Todo/TodoHeader";

const Todo: React.FC = () => {
  return (
    <div>
      <Header />
      <TodoWrap>
        <TodoHeader name="둘리" />
        <Fnb />
      </TodoWrap>
    </div>
  );
};

export default Todo;
