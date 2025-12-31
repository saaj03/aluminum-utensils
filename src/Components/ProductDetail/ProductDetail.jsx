import { useState } from "react";
import "./ProductDetail.css";

function ProductDetail({ product, onAddToCart, onBack }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [reviewText, setReviewText] = useState("");

  const submitReview = () => {
    if (!reviewText.trim()) return alert("Please write feedback");

    fetch(`http://localhost:5001/review/${product.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "Customer",
        comment: reviewText,
        rating: 5,
      }),
    }).then(() => {
      alert("Thank you for your feedback!");
      setReviewText("");
    });
  };

  return (
    <div className="container detail">
      <button className="back-btn" onClick={onBack}>
        ← Back to Products
      </button>

      <img src={product.image} alt={product.name} />

      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="desc">{product.description}</p>

        {/* SIZE / WEIGHT / PRICE */}
        <label>Select Size:</label>
        <select
          onChange={(e) =>
            setSelectedSize(product.sizes[e.target.selectedIndex])
          }
        >
          {product.sizes.map((s, index) => (
            <option key={index}>
              {s.size} | {s.weight} | ₹{s.price}
            </option>
          ))}
        </select>

        <h2 className="price">₹{selectedSize.price}</h2>

        <button
          className="add-btn"
          onClick={() =>
            onAddToCart(
              {
                ...product,
                selectedSize,
                price: selectedSize.price,
              },
              1
            )
          }
        >
          Add to Cart
        </button>

        {/* CUSTOMER REVIEWS */}
        <h3>Customer Reviews</h3>
        {product.reviews.length === 0 && <p>No reviews yet</p>}

        {product.reviews.map((r, i) => (
          <div key={i} className="review">
            ⭐⭐⭐⭐⭐
            <p>{r.comment}</p>
            <small>– {r.user}</small>
          </div>
        ))}

        {/* ADD FEEDBACK */}
        <textarea
          placeholder="Write your feedback"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <button className="review-btn" onClick={submitReview}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
