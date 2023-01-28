import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import { Loading } from '../Helper/Loading';
import { Error } from '../Helper/Error';
import { PhotoContent } from './PhotoContent';
import { Head } from '../Helper/Head';

export const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <section className="container" style={{ marginBlock: '3.2rem' }}>
      {data && <Head title={data.photo.title} />}
      <PhotoContent data={data} single={true} />
    </section>
  );
};
