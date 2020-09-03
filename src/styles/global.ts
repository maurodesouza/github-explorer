import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    cursor: default;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  input {
    cursor: text;
  }

  button, a {
    cursor: pointer;

    * {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }
`;
