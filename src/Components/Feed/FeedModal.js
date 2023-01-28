import React from 'react';
import { PHOTO_GET } from '../../Api';
import { useFetch } from '../../Hooks/useFetch';
import { Loading } from '../Helper/Loading';
import { Error } from '../Helper/Error';
import styles from './FeedModal.module.css';

import { PhotoContent } from '../Photo/PhotoContent';

export const FeedModal = ({ modalPhoto, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(modalPhoto.id);
    request(url, options);
  }, [modalPhoto, request]);

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modalWrapper} onClick={handleClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
