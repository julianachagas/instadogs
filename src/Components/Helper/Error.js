import React from 'react';

export const Error = ({ error }) => {
  const styles = {
    color: ' #f31',
    fontSize: '1.4rem',
    marginTop: '1.6rem',
    lineHeight: '1.5',
  };

  if (!error) return null;
  return <p style={styles}>{error}</p>;
};
