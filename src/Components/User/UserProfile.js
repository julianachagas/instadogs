import React from 'react';
import { useParams } from 'react-router-dom';
import { Feed } from '../Feed/Feed';

export const UserProfile = () => {
  const params = useParams();
  return (
    <section className="container" style={{ marginBottom: '3.2rem' }}>
      <h1 className="title">{params.username}</h1>
      <Feed user={params.username} />
    </section>
  );
};
