import React from 'react';
import { Link } from 'react-router-dom';

const heroStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '60px 20px',
  background: 'linear-gradient(to right, #8360c3, #2ebf91)',
  color: '#fff',
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1.2rem',
  marginBottom: '30px',
  maxWidth: '600px',
};

const buttonStyle = {
  padding: '12px 25px',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#fff',
  color: '#2ebf91',
  cursor: 'pointer',
  textDecoration: 'none',
};

const Hero = () => {
  return (
    <section style={heroStyle}>
      <h1 style={titleStyle}>Discover Your Style</h1>
      <p style={descriptionStyle}>
        Explore top-quality fashion products at unbeatable prices. Shop from our wide range of collections and make your fashion statement today!
      </p>
      <Link to="/products" style={buttonStyle}>Shop Now</Link>
    </section>
  );
};

export default Hero;