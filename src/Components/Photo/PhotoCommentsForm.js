import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import { ReactComponent as SendIcon } from '../../assets/send.svg';
import { useFetch } from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../Api';
import { Error } from '../Helper/Error';

export const PhotoCommentsForm = ({ photoId, setComments, single }) => {
  const [comment, setComment] = React.useState('');
  const { error, request } = useFetch();

  async function postComment(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(photoId, comment);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments(prevState => [...prevState, json]);
      setComment('');
    }
  }
  return (
    <form
      className={`${styles.commentsForm} ${single ? styles.single : ''}`}
      onSubmit={postComment}
    >
      <textarea
        name="comment"
        id="comment"
        placeholder="Comment here..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button>
        <SendIcon />
      </button>
      <Error error={error} />
    </form>
  );
};
