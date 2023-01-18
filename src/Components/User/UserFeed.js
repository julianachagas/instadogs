import React from 'react';

import { Feed } from '../Feed/Feed';
import { Head } from '../Helper/Head';

export const UserFeed = ({ user }) => {
  return (
    <section style={{ marginBottom: '3.2rem' }}>
      <Head title="My Account" />
      <Feed user={user} />
    </section>
  );
};
