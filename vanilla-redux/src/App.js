import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
