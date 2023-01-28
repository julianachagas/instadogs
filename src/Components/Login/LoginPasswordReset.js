import React from 'react';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../Helper/Error';
import { PASSWORD_RESET } from '../../Api';
import { useNavigate, useLocation } from 'react-router-dom';
import { Head } from '../Helper/Head';

export const LoginPasswordReset = () => {
  const [key, setKey] = React.useState('');
  const [login, setLogin] = React.useState('');
  const newPassword = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    if (newPassword.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        password: newPassword.value,
        key,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    const key = search.get('key');
    const login = search.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, [location]);

  return (
    <section className="animationLeft">
      <Head title="Reset Password" />
      <h1 className="title">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New Password"
          id="newPassword"
          type="password"
          placeholder=""
          {...newPassword}
        />
        <Button disabled={loading ? true : false}>Reset Password</Button>
        <Error error={error}></Error>
      </form>
    </section>
  );
};
