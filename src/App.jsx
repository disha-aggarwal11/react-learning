import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
const[cartItems, setCartItems] = useState([]);

function addToCart(product){
  setCartItems((prevsItems) => [...prevsItems,product]);
}

  return (
    <>
      <Navbar cartItems={cartItems}/>

      <Product name="Laptop" onAddToCart={addToCart} />

      <Product name="Mouse" onAddToCart={addToCart} />

      <Product name="Keyboard" onAddToCart={addToCart} />

      <Cart cartItems={cartItems} />

      <p>Total Items: {cartItems.length}</p>
    </>
  );
}

export default App;