import React from 'react';
import styles from './PhotoDelete.module.css';
import { useFetch } from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../Api';
import { useNavigate, useLocation } from 'react-router-dom';

export const PhotoDelete = ({ photoId }) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();
  const location = useLocation();
  async function deletePhoto() {
    const confirm = window.confirm(
      'Are you sure you want to delete this post?',
    );
    if (confirm) {
      const { url, options } = PHOTO_DELETE(photoId);
      const { response } = await request(url, options);
      if (response.ok) {
        if (location.pathname.includes('photo')) {
          navigate('/');
        } else {
          window.location.reload();
        }
      }
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Delete
        </button>
      ) : (
        <button className={styles.delete} onClick={deletePhoto}>
          Delete
        </button>
      )}
    </>
  );
};
