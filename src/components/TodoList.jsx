function TodoList({ todos }) {
  return (
    <>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;