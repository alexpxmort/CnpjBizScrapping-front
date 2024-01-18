// LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
    <p className="ml-2">Carregando...</p>
  </div>
);

export default LoadingSpinner;
