import { css, Theme } from '@emotion/react'

const styles = {
  root: ({ colors }: Theme) => css`
    width: 400px;
    background: ${colors.primary[300]};
    padding: 0;
    border-radius: 8px;
    position: relative;

    p {
      padding: 16px 16px 0;
      margin-bottom: 0.8rem;
    }

    .apexcharts-canvas {
      border-radius: 8px;
    }

    .range {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 80%;
      position: absolute;
      top: 4.4rem;
      right: 0.8rem;

      span {
        font-size: 1.2rem;
        text-align: right;
        color: ${colors.secondary[100]};
      }
    }
  `
}

export default styles
