import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as FeedIcon } from '../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/stats.svg';
import { ReactComponent as PostIcon } from '../../assets/post.svg';
import { ReactComponent as ExitIcon } from '../../assets/exit.svg';
import { UserContext } from '../../UserContext';
import { useMedia } from '../../Hooks/useMedia';
import { useLocation } from 'react-router-dom';
import styles from './UserHeaderNav.module.css';

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const responsive = useMedia('(max-width: 640px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {responsive && (
        <button
          className={`${styles.btn} ${styles.menuBtn} ${
            mobileMenu && styles.menuBtnActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
        ></button>
      )}
      <nav className={responsive ? styles.navMobile : styles.nav}>
        <NavLink to="/account" end className={styles.btn}>
          <FeedIcon />
          {responsive && 'Account'}
        </NavLink>
        <NavLink to="/account/stats" className={styles.btn}>
          <StatsIcon />
          {responsive && 'Stats'}
        </NavLink>
        <NavLink to="/account/post" className={styles.btn}>
          <PostIcon />
          {responsive && 'Post'}
        </NavLink>
        <button type="button" className={styles.btn} onClick={userLogout}>
          <ExitIcon />
          {responsive && 'Logout'}
        </button>
      </nav>
    </>
  );
};
