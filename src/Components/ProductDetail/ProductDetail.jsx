import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="container detail">
      <button onClick={() => navigate("/")}>← Back</button>

      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>₹{product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
