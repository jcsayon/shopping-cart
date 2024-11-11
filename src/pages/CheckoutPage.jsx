import React from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutPage({ cartItems, resetCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = () => {
    alert('Payment Successful');
    resetCart();
    navigate('/'); // Redirect to the main page
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - Quantity: {item.quantity} - Price: $
                {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={() => navigate(-1)}>Cancel</button>
          <button onClick={handlePay}>Pay</button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
