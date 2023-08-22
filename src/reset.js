import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    background: #202020;
    font-family: 'Roboto', sans-serif;
  }
`;
