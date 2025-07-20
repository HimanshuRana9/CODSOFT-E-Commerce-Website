import React, { useState } from 'react';

const sidebarStyle = {
  width: '250px',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRight: '1px solid #ddd',
  height: '100%',
  boxSizing: 'border-box',
};

const titleStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const labelStyle = {
  display: 'block',
  margin: '10px 0',
};

const SidebarFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <aside style={sidebarStyle}>
      <h3 style={titleStyle}>Filter by Category</h3>
      <label style={labelStyle}>
        <input
          type="radio"
          name="category"
          value=""
          checked={selectedCategory === ''}
          onChange={handleCategoryChange}
        />
        All
      </label>
      {categories.map((category, index) => (
        <label key={index} style={labelStyle}>
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={handleCategoryChange}
          />
          {category}
        </label>
      ))}
    </aside>
  );
};

export default SidebarFilter;