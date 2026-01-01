import { useNavigate } from "react-router-dom";
import products from "./data/products";
import ProductCard from "./Components/ProductCard/ProductCard";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Premium Aluminum Utensils</h1>
      <p>Trusted by Indian kitchens</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
