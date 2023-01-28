import React from 'react';
import styles from './Login.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { LoginCreateAccount } from './LoginCreateAccount';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import { NotFound } from '../NotFound';

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;

  return (
    <section className={styles.loginContainer}>
      <div className={`${styles.login}`}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreateAccount />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
};
