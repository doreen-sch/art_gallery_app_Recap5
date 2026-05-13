import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin-bottom: 8rem;
    overflow-x: hidden;
    font-family: sans-serif;
    background: url('/images/ocean_background.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;
