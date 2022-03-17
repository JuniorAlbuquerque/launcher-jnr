import { css, Theme } from '@emotion/react'

const styles = {
  root: ({ colors }: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${colors.primary[100]};
    border-radius: 1.4rem;
    margin-top: 4rem;
    padding: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 120px !important;
      margin-top: -0.2rem;

      span {
        font-size: 1.2rem;
        margin-top: -0.8rem;
      }
    }
  `
}

export default styles
