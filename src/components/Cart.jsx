function Cart({ cartItems }) {
  return (
    <>
      <h2>Cart</h2>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Cart;