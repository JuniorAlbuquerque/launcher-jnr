import { css } from '@emotion/react'

export const globalStyles = () => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body,
  input,
  textarea,
  button {
    font: 500 1.6rem Raleway, sans-serif;
  }

  html,
  body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`
