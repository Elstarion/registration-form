import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EntryPage } from './style';
import FormCard, { FormMessage, StyledFormLinks } from '../components/FormCard';
import Input, { validateForm, StyledNameInputs } from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
      setLastName(value);
    }
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

    const validForm = validateForm({ firstName, lastName, email, password });

    if (validForm !== null) {
      setError(validForm);
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setError(null);
    setSuccess('Successfully signed up');
  }

  return (
    <EntryPage>
      <FormCard>
        {error ? (
          <FormMessage error={error}>{error}</FormMessage>
        ) : (
          <FormMessage>{success}</FormMessage>
        )}
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <StyledNameInputs>
            <Input
              value={firstName}
              onChange={handleInputChange}
              type='text'
              placeholder='First Name *'
              id='firstName'
            />
            <Input
              value={lastName}
              onChange={handleInputChange}
              type='text'
              placeholder='Last Name *'
              id='lastName'
            />
          </StyledNameInputs>
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
            name='sign-up'
            label='I want to receive inspiration, marketing promotions and updates via email.'
            value={check}
            checked={check}
            onChange={handleCheck}
          />
          <Button type='submit'>Sign up</Button>
        </form>
        <StyledFormLinks>
          <Link to='/sign-in'>Already have an account? Sign in</Link>
        </StyledFormLinks>
      </FormCard>
    </EntryPage>
  );
};

export default Signup;
