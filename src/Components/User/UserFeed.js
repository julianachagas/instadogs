import React from 'react';

import { Feed } from '../Feed/Feed';

export const UserFeed = ({ user }) => {
  return (
    <section style={{ marginBottom: '3.2rem' }}>
      <Feed user={user} />
    </section>
  );
};
