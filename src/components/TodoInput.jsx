import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") {
      return;
    }

    onAddTodo(input);

    setInput("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default TodoInput;