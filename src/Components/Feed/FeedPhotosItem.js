import React from 'react';
import { Image } from '../Helper/Image';
import styles from './FeedPhotosItem.module.css';

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photosItem} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};
