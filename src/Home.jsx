import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard/ProductCard";

// local images (because backend doesn't serve images)
import kadaiImg from "./assets/images/kadai.jpg";
import degchiImg from "./assets/images/degchi.jpg";

function Home({ onView }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => {
        // attach images manually
        const withImages = data.map((p) => ({
          ...p,
          image:
            p.name.toLowerCase().includes("kadai")
              ? kadaiImg
              : degchiImg,
        }));
        setProducts(withImages);
      });
  }, []);

  return (
    <div className="container">
      <h1>Premium Aluminum Utensils</h1>
      <p>High quality cookware trusted by Indian kitchens</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={onView}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
