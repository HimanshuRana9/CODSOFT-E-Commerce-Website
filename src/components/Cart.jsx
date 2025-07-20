import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const cartContainerStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  maxWidth: '600px',
  margin: '20px auto',
};

const cartTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '15px',
  textAlign: 'center',
};

const cartItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ccc',
  padding: '10px 0',
};

const totalStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textAlign: 'right',
  marginTop: '15px',
};

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div style={cartContainerStyle}>
      <h2 style={cartTitleStyle}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={cartItemStyle}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div style={totalStyle}>Total: ₹{getTotal().toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;