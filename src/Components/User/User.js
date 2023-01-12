import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './UserHeader';
import { UserFeed } from './UserFeed';
import { UserPost } from './UserPost';
import { UserStats } from './UserStats';
import { UserContext } from '../../UserContext';

export const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserFeed user={data.id} />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="post" element={<UserPost />} />
      </Routes>
    </section>
  );
};
