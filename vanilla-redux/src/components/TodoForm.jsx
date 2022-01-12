import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  const click = () => {
    dispatch(addTodo(inputRef.current.value));
  };

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={click}>추가</button>
    </div>
  );
};

export default TodoForm;
