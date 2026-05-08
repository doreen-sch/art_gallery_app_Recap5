import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
        margin: 0;
    overflow-x: hidden;

    font-family: sans-serif;

    background:
      linear-gradient(
        rgba(255,255,255,0.8),
        rgba(235,255,255,0.9)
      ),
      url('./images/ocean_background.png');

    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;
