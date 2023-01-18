import React from 'react';
import { useParams } from 'react-router-dom';
import { Feed } from '../Feed/Feed';
import { Head } from '../Helper/Head';

export const UserProfile = () => {
  const params = useParams();
  return (
    <section className="container" style={{ marginBottom: '3.2rem' }}>
      <Head title={params.username} />
      <h1 className="title">{params.username}</h1>
      <Feed user={params.username} />
    </section>
  );
};
