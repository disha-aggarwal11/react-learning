// import { useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       <h1>React Login Example</h1>

//       {isLoggedIn ? (
//         <>
//           <h2>Welcome</h2>

//           <button onClick={() => setIsLoggedIn(false)}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>
//           Login
//         </button>
//       )}
//     </>
//   );
// }

// export default App;

import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "Phone", price: 30000 },
    { id: 3, title: "Tablet", price: 25000 },
    { id: 4, title: "Mouse", price: 1500 },
    { id: 5, title: "Keyboard", price: 2500 },
    { id: 6, title: "Monitor", price: 12000 },
    { id: 7, title: "Headphones", price: 4000 },
    { id: 8, title: "Speaker", price: 3500 },
    { id: 9, title: "Smart Watch", price: 8000 },
    { id: 10, title: "Camera", price: 45000 },
  ];

  return (
    <>
      <h1>Product List</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </>
  );
}

export default App;