import React from 'react';

const footerStyle = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  fontSize: '0.9rem',
  marginTop: '40px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
    </footer>
  );
};

export default Footer;