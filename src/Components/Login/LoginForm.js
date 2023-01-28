import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import styles from './LoginForm.module.css';
import btnStyles from '../Forms/Button.module.css';
import { UserContext } from '../../UserContext';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';

export const LoginForm = () => {
  const username = useForm('username');
  const password = useForm('password');
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animationLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Input
          type="text"
          label="Username"
          id="username"
          placeholder=""
          {...username}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder=""
          {...password}
        />
        <Button disabled={loading ? true : false}>Login</Button>
        <Error error={error && 'Invalid data.'} />
      </form>
      <Link to="/login/lost" className={styles.lostPassword}>
        Forgot your password?
      </Link>
      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Create your account!</p>
        <Link to="/login/create" className={btnStyles.btn}>
          Sign Up
        </Link>
      </div>
    </section>
  );
};
