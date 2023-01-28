import React from 'react';
import useForm from '../../Hooks/useForm';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useFetch } from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';

export const LoginPasswordLost = () => {
  const resetPassword = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (resetPassword.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: resetPassword.value,
        url: window.location.href.replace('lost', 'reset'),
      });
      request(url, options);
    }
  }
  return (
    <section className="animationLeft">
      <Head title="Forgot Your Password?" />
      <h1 className="title">Forgot your password?</h1>
      {data ? (
        <p style={{ color: '#4c1', paddingBlock: '3.2rem' }}>Email sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email/Username"
            id="resetPassword"
            type="text"
            placeholder=""
            {...resetPassword}
          />
          <Button disabled={loading ? true : false}>Send Email</Button>
          <Error error={error}></Error>
        </form>
      )}
    </section>
  );
};
