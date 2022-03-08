import { css, Theme } from '@emotion/react'

const styles = {
  root: ({ colors }: Theme) => css`
    width: 30rem;
    padding: 1.6rem;

    .avatar {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.6rem;

      p {
        font-size: 2.2rem;
        line-height: 2.8rem;
        color: ${colors.secondary[300]};
      }

      span {
        color: ${colors.secondary[200]};
        font-size: 1.4rem;
      }
    }
  `
}

export default styles
