import "./ProductCard.css";

function ProductCard({ product, onView }) {
  return (
    <div className="product-card" onClick={() => onView(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button>View Details</button>
    </div>
  );
}

export default ProductCard;
