import React from 'react';

function ProductItem({ product, addToCart }) {
  // Default image if the product image is missing or broken
  const defaultImage = "https://via.placeholder.com/150";

  return (
    <div className="product-item">
      <img src={product.images && product.images[0] ? product.images[0] : defaultImage} alt={product.title || "Product"} />
      <h4>{product.title || "No Title Available"}</h4>
      <p>Price: ${product.price !== undefined ? product.price : "N/A"}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
