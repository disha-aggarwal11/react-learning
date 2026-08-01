import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <h1>
        {darkMode ? "Dark Mode: ON" : "Dark Mode: OFF"}
      </h1>

      <button onClick={handleClick}>
        Toggle
      </button>
    </>
  );
}

export default App;