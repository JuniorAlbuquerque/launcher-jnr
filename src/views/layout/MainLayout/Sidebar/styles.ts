import { css, Theme } from '@emotion/react'

const styles = {
  root: ({ colors }: Theme) => css`
    width: 30rem;
    height: 100%;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

    .charts {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  `
}

export default styles
