import { css } from '@emotion/react'
import bg from '@/assets/bg.png'

const styles = {
  root: () => css`
    display: flex;
    gap: 0.8rem;
    flex: 1;
    height: 100vh;
  `,

  main: css`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 1.6rem 0;
    flex: 1;
  `
}

export default styles
