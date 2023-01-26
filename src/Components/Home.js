import React from 'react';
import { Feed } from '../Components/Feed/Feed';
import { Head } from './Helper/Head';

export const Home = () => {
  return (
    <section className="container" style={{ marginBlock: '3.2rem' }}>
      <Head
        title="Home"
        description="InstaDogs HomePage with the feed of photos"
      />
      <Feed />
    </section>
  );
};
