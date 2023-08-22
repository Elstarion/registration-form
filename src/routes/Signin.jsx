import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EntryPage } from './style';
import FormCard, { FormMessage, StyledFormLinks } from '../components/FormCard';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

const Signin = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const [email, setEmail] = useState(() =>
    localStorage.checkbox ? localStorage.email : ''
  );

  const [password, setPassword] = useState(() =>
    localStorage.checkbox ? localStorage.password : ''
  );
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    localStorage.checkbox
      ? localStorage.checkbox
      : (localStorage.checkbox = false);

    localStorage.email ? localStorage.email : (localStorage.email = '');

    localStorage.password
      ? localStorage.password
      : (localStorage.password = '');

    const boxState = JSON.parse(localStorage.getItem('checkbox'));
    setCheck(boxState);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkbox', JSON.stringify(check));
  }, [check]);

  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
  }

  function handleCheck() {
    setCheck(!check);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (check && email !== '') {
      localStorage.email = email;
      localStorage.password = password;
    } else {
      localStorage.email = '';
      localStorage.password = '';
    }

    const signInData = {
      email,
      password,
    };

    const signUpData = localStorage.formData
      ? JSON.parse(localStorage.formData)
      : '';

    if (
      signInData.email === signUpData.email &&
      signInData.password === signUpData.password
    ) {
      setSuccess('Sign in successful');
    } else {
      setError('User does not exist');
      return;
    }

    setEmail('');
    setPassword('');
    setError(null);

    setTimeout(() => {
      navigate('/');
    }, 1000);
  }

  return (
    <EntryPage>
      <FormCard>
        {error ? (
          <FormMessage error={error}>{error}</FormMessage>
        ) : (
          <FormMessage>{success}</FormMessage>
        )}

        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={handleInputChange}
            type='email'
            placeholder='name@email.com *'
            id='email'
          />
          <Input
            value={password}
            onChange={handleInputChange}
            type='password'
            placeholder='Password *'
            id='password'
          />
          <Checkbox
            label='Remember me'
            value={check}
            checked={check}
            onChange={handleCheck}
          />
          <Button type='submit'>Sign in</Button>
          <StyledFormLinks id='sign-in'>
            <a>Forgot password?</a>
            <Link to='/sign-up'>Don't have an account? Sign up</Link>
          </StyledFormLinks>
        </form>
      </FormCard>
    </EntryPage>
  );
};

export default Signin;
