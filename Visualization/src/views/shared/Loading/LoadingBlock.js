import React from 'react';
import Spinner from 'react-spinkit';

const LoadingBlock = ({ className }) => (
  <div className={`loading-block ${className || ''}`}>
    <Spinner name="ball-spin-fade-loader" color="lightsalmon" className="loading-block-spinner" />
  </div>
);

export default LoadingBlock;
