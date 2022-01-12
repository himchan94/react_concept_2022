import { useRef } from "react";

const TodoForm = ({ add }) => {
  const inputRef = useRef();

  const click = () => {
    add(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={click}>추가</button>
    </div>
  );
};

export default TodoForm;
