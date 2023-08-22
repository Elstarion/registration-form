import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  min-width: 64px;
  margin: 12px 0;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #2f8bfd;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #0072ff;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
