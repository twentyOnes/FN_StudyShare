import React from "react";
import { TodoHeaderTit } from "./styles";

type Props = {
  name: string;
};

const TodoHeader: React.FC<Props> = ({ name }) => {
  return (
    <TodoHeaderTit>
      <strong>{name}님의 day to do</strong>
    </TodoHeaderTit>
  );
};

export default TodoHeader;
