import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags } = image;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const gallery = document.querySelector('.js-gallery');

    const handleGalleryPointerEvents = () => {
      if (!gallery) return;

      if (showModal) {
        console.log('Modal is now shown');
        gallery.style.pointerEvents = 'none';
      } else {
        console.log('Modal is now hidden');
        gallery.style.pointerEvents = 'auto';
      }
    };

    handleGalleryPointerEvents();

    // Cleanup function to restore pointer events on component unmount or when showModal changes
    return () => {
      if (gallery) {
        gallery.style.pointerEvents = 'auto';
      }
    };
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <li className={styles.galleryItem} onClick={toggleModal}>
      <img src={webformatURL} alt={tags} />
      {showModal && (
        <Modal image={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
};
