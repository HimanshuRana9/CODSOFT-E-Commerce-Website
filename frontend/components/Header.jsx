import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#1a1a1a',
  color: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
};

const navStyle = {
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  fontFamily: 'Poppins, sans-serif'
};

const cartStyle = {
  backgroundColor: '#ff6f61',
  padding: '6px 12px',
  borderRadius: '5px',
  fontWeight: 'bold'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500'
};

const Header = ({ cartCount }) => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>StyleNest</div>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/products" style={linkStyle}>Products</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
      <div style={cartStyle}>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart ({cartCount})</Link>
      </div>
    </header>
  );
};

export default Header;