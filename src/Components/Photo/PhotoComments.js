import React from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../UserContext';
import { PhotoCommentsForm } from './PhotoCommentsForm';

export const PhotoComments = props => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef();

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
        ref={commentsSection}
      >
        {comments.map(item => (
          <li key={item.comment_ID}>
            <b>{item.comment_author}:</b> {item.comment_content}
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          photoId={props.photo.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};
