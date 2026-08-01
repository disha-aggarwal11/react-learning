import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  return (
    <>
      <h1>Todo App</h1>

      <TodoInput onAddTodo={addTodo} />

      <TodoList todos={todos} />

      <p>Total Todos: {todos.length}</p>
    </>
  );
}

export default App;