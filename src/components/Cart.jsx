import React from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="cart-summary">
            <p>
              Subtotal: <span>${subtotal.toFixed(2)}</span>
            </p>
            <p>
              Tax (12%): <span>${tax.toFixed(2)}</span>
            </p>
            <p className="total">
              Total: <span>${total.toFixed(2)}</span>
            </p>
            <button onClick={() => navigate('/checkout')}>Check Out</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
