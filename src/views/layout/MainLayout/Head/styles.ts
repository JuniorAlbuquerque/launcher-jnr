import { css, Theme } from '@emotion/react'

const styles = {
  root: ({ colors }: Theme) => css`
    h3 {
      font-size: 3rem;
      margin-top: 3.4rem;
      margin-bottom: 1.6rem;
      color: ${colors.primary[500]};
    }
  `
}

export default styles
