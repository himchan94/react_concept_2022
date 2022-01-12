const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, idx) => {
        return <li key={idx}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
