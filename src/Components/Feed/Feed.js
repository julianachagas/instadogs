import React from 'react';
import { FeedModal } from './FeedModal';
import { FeedPhotos } from './FeedPhotos';
import PropTypes from 'prop-types';

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > 0.75 * height && !wait) {
          setPages(pages => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);
  return (
    <>
      {pages.map(page => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '3.2rem 0',
            color: '#888',
          }}
        >
          There are no more posts to show right now.
        </p>
      )}
      {modalPhoto && (
        <FeedModal modalPhoto={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
    </>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
