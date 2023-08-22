import styled from 'styled-components';

const emailPattern = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
const namePattern = /^[\p{L}]{3,}$/u;
const passwordPattern = /^(?=.*[\p{Ll}])(?=.*[\p{Lu}]).{8,}$/u;

export function changeBorder(id, value) {
  if (id === 'firstName' || id === 'lastName') {
    return namePattern.test(value) ? '#059142' : '#ff0000';
  }
  if (id === 'email') {
    return emailPattern.test(value) ? '#059142' : '#ff0000';
  }
  if (id === 'password') {
    return passwordPattern.test(value) ? '#059142' : '#ff0000';
  }
}

export function validateForm({ firstName, lastName, email, password }) {
  if (!firstName.trim()) {
    return 'First name is required';
  } else if (!namePattern.test(firstName)) {
    return 'First name is wrong';
  }

  if (!lastName.trim()) {
    return 'Last name is required';
  } else if (!namePattern.test(lastName)) {
    return 'Last name is wrong';
  }

  if (!email) {
    return 'Email is required';
  } else if (!emailPattern.test(email)) {
    return 'Email address is invalid';
  }

  if (!password) {
    return 'Password is required';
  } else if (!passwordPattern.test(password)) {
    return 'Wrong password format';
  }

  return null;
}

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  outline: none;
  padding: 8px 16px;
  border: 2px solid;
  border-color: ${({ id, value }) =>
    value.length > 0 ? changeBorder(id, value) : '#888888'};
  border-radius: 4px;
  font-size: 1rem;
  color: #888888;
  &::placeholder {
    color: #dedede;
  }

  &:nth-last-child() {
    margin-bottom: 1px;
  }
`;

export const StyledNameInputs = styled.div`
  display: flex;
  justify-content: space-between;
  > input {
    width: 48%;
  }
`;

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
