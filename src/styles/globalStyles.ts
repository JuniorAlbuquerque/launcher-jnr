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
    font: 500 1.6rem Poppins, sans-serif;
  }

  html,
  body {
    height: 100%;
    background: #26254f;
    color: #d8d0ff;

    .apexcharts-tooltip {
      background: #2b2a59;
    }
  }

  button {
    cursor: pointer;
  }
`
