import React from 'react';
import styles from './CustomArrows.module.css';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick}>
      {/* You can use custom icons or any other content for the arrow */}
      <span>&lt;</span>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick}>
      {/* You can use custom icons or any other content for the arrow */}
      <span>&gt;</span>
    </button>
  );
};

export { CustomPrevArrow, CustomNextArrow };