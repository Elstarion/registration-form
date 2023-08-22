import styled, { keyframes } from 'styled-components';

const StyledCheckbox = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  margin: 0.6em 1em;

  span {
    margin: 0 0 0 10px;
    width: 90%;
    font-size: 16px;
    text-align: left;
  }
`;

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: ${({ name }) => (name ? '0.5em' : '0em')};
  left: -1em;
  border: 1px solid #757575;
  border-radius: 0.3em;

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${StyledCheckbox}:checked + &::after {
    display: block;
    top: 0;
    left: 4px;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation: ${rotate} 0.3s forwards;
  }
`;

const Checkbox = ({ checked, onChange, name, id, label }) => {
  return (
    <Label htmlFor={id}>
      <StyledCheckbox
        id={id}
        type='checkbox'
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Indicator name={name} />
      <span>{label}</span>
    </Label>
  );
};

export default Checkbox;
