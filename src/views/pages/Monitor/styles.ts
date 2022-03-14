import { css } from '@emotion/react'

const styles = {
  root: () => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 0 1.8rem 0 0;
    flex: 1;
    height: 100%;

    .main {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-top: 4.6rem;

      background: rgba(20, 19, 63, 0.5);
      border-radius: 20px;
      padding: 1.8rem;
      flex: 1;
    }
  `
}

export default styles
