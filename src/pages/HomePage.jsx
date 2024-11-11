import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

function HomePage({ cartItems, addToCart, updateQuantity, removeFromCart }) {
  return (
    <div className="container">
      <ProductList addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default HomePage;
