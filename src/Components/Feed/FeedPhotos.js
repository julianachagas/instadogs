import React from 'react';
import { FeedPhotosItem } from './FeedPhotosItem';
import { PHOTOS_GET } from '../../Api';
import { useFetch } from '../../Hooks/useFetch';
import { Loading } from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

export const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <p className="error">{error}</p>;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <ul className={`${styles.photosContainer} animationLeft`}>
      {data.map(item => (
        <FeedPhotosItem
          key={item.id}
          photo={item}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};
