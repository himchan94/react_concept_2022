import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

import React from "react";

const Todos = () => {
  return (
    <div>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
};

export default Todos;
