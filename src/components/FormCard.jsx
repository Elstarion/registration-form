import styled from 'styled-components';

const StyledFormCard = styled.div`
  width: 100%;
  max-width: 550px;
  border-radius: 4px;
  padding: 50px;
  background-color: #fff;
  text-align: center;
  h2 {
    font-weight: 500;
    margin-bottom: 50px;
  }
  span {
    display: block;
    color: #888888;
    font-size: 14px;
  }
  a {
    margin-left: 4px;
    color: #2f8bfd;
  }
`;

export const StyledFormLinks = styled.div`
  display: flex;
  justify-content: ${({ id }) => (id ? 'space-between' : 'flex-end')};

  width: 100%;
`;

export const FormMessage = styled.div`
  color: ${({ error }) => (error ? '#ff0000' : '#059142')};
  text-align: center;
`;

const FormCard = ({ children }) => {
  return <StyledFormCard>{children}</StyledFormCard>;
};

export default FormCard;
