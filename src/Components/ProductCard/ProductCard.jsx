import "./ProductCard.css";

function ProductCard({ product, onView }) {
  return (
    <div className="card" onClick={onView}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
