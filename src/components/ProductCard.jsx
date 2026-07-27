function ProductCard({title,price,children}) {
  
  return (
    <>
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
      {children}
    </>
  );
}

export default ProductCard;