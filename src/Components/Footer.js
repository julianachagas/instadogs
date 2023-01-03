import React from 'react';
import styles from './Footer.module.css';
import { DogSvg } from './DogSvg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <DogSvg color="var(--secondary-color)" />
      </Link>
      <div>
        <p>
          Made with &#9825; by{' '}
          <a
            href="https://github.com/julianachagas"
            target="_blank"
            rel="noreferrer"
          >
            Juliana Chagas
          </a>
        </p>
        <p>
          Design by{' '}
          <a href="https://www.origamid.com/" target="_blank" rel="noreferrer">
            Origamid
          </a>
        </p>
      </div>
    </footer>
  );
};
