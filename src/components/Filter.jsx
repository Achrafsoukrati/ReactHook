import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter" style={filterStyle}>
      <input 
        type="text" 
        value={title} 
        placeholder="Filter by title" 
        onChange={onTitleChange} 
        style={inputStyle}
      />
      <input 
        type="number" 
        value={rate} 
        placeholder="Filter by rate" 
        onChange={onRateChange} 
        style={inputStyle}
      />
    </div>
  );
}

const filterStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '3px',
  border: '1px solid #ccc',
  marginRight: '10px',
};

export default Filter;
