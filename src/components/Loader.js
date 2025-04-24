import React from 'react';
import './Loader.css';
import { FaPlane } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="airplane-loader">
        <FaPlane className="loader-plane" />
      </div>
      <div className="loading-text">Welcome to Sheba Pathways</div>
    </div>
  );
};

export default Loader;
