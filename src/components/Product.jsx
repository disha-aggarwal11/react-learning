function Product({name, onAddToCart}) {

    return(
        <>
        <h3>{name}</h3>

      <button onClick={() => onAddToCart(name)}>
        Add to Cart
      </button>
      
        </>
    );
}

export default Product;