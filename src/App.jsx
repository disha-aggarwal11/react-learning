import {useState} from "react";

function App() {
  const[count,setCount] = useState(0);
  console.log("App rendered");

  function increase(){
   setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return(
    <>
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>
    </>
  );
}
export default App;