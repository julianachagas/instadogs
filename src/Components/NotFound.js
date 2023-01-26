import React from 'react';
import { Head } from './Helper/Head';

export const NotFound = () => {
  return (
    <div className="container" style={{ marginBlock: '3.2rem' }}>
      <Head title="Page Not Found" />
      <h1 className="title">Error 404</h1>
      <p>The page was not found.</p>
    </div>
  );
};
