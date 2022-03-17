import { css, Theme } from '@emotion/react'

const styles = {
  root: () => css`
    display: flex;
    gap: 1.6rem;

    padding: 0 1.8rem 0 0;
    flex: 1;
    height: 100%;
    margin-top: 4.6rem;

    .main {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      background: rgba(20, 19, 63, 0.5);
      border-radius: 20px;
      padding: 1.8rem;
      flex: 1;
    }
  `,

  rightContent: ({ colors }: Theme) => css`
    .weather-content {
      width: 26rem;
      height: 22rem;
      background: ${colors.primary[300]};
      border-radius: 2rem;
      padding: 1.2rem 2rem;

      display: flex;
      flex-direction: column;

      p {
        text-align: center;
      }
    }

    .weather-content__temp {
      display: flex;
      margin-top: 1rem;
      align-self: center;
      align-items: baseline;

      h1 {
        font-size: 4.8rem;
        line-height: 4.8rem;
        margin-left: 1rem;
      }

      span {
        font-size: 2rem;
        align-self: start;
        margin-top: 0.4rem;
      }

      img {
        width: 48px;
        height: 48px;
      }
    }

    .weather-content__info {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-top: 1rem;
      font-size: 1.4rem;

      img {
        width: 16px;
        margin-left: -0.25rem;
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }
  `
}

export default styles
