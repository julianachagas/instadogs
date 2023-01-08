import React from 'react';
import styles from './Button.module.css';

export const Button = ({ children, ...props }) => {
  return (
    <button type="submit" className={styles.btn} {...props}>
      {props.disabled ? 'Loading...' : children}
    </button>
  );
};
