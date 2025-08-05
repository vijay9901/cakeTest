import React from 'react';
import './Loading.css';

const Loading = ({ message = "Loading CakeFest delights..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="cake-icon">🎂</div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default Loading;