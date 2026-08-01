function Navbar({ cartItems }) {
  return (
    <>
      <h2>
        Shopping Cart ({cartItems.length})
      </h2>

      <hr />
    </>
  );
}

export default Navbar;