import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F9F9F9;
    --shapped: #ddd9d9;

    --azul-cobalto: #343090;
    --azul-oceano: #4E47C2;
    --azul-violeta: #7A75D1;
    --azul-maximum: #B5B3E6;

    --rosa: #F5487F;
    --red: rgb(188, 16, 19);

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    @media (max-width: 500px) {
      font-size: 81.25%;
    }
    @media (max-width: 385px) {
      font-size: 75%;
    }
    @media (max-width: 300px) {
      font-size: 71.875%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
    color: var(--text-title);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`