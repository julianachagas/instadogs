import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';
import { UserHeaderNav } from './UserHeaderNav';

export const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/stats':
        setTitle('Stats');
        break;
      case '/account/post':
        setTitle('Post Your Photo');
        break;
      default:
        setTitle('My Account');
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
