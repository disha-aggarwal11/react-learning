import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <ProductCard
        title="Laptop"
        price={50000}
      > Buy Now </ProductCard>
      <ProductCard
        title="Phone"
        price={30000}
      />
      <ProductCard
        title="Tablet"
        price={25000}
      />
    </>
  );
}

export default App;