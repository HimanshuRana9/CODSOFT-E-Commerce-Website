import React, { useContext } from 'react';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext';

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  padding: '40px',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '15px',
};

const titleStyle = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const priceStyle = {
  color: '#2ebf91',
  fontWeight: '600',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#2ebf91',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section style={containerStyle}>
      {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h3 style={titleStyle}>{product.name}</h3>
          <p style={priceStyle}>₹{product.price}</p>
          <button style={buttonStyle} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default ProductList;