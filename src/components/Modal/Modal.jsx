// src/components/Modal/Modal.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'; // Make sure to create a corresponding CSS module

export const Modal = ({ onClose, tags, image }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]); // Ensure onClose is included in the dependencies array

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img src={image} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
