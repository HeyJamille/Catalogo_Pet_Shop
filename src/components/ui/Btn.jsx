// src/components/Button.jsx
import React from 'react';

const Btn = ({ children, ...props }) => {
  return (
    <button className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
      {children}
    </button>
  );
};

export default Btn;