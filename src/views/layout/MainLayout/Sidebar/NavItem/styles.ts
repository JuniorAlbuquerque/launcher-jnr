import { css, Theme } from '@emotion/react'

const styles = {
  wrapper: ({ colors }: Theme, active: boolean) => css`
    display: flex;
    flex-direction: column;

    a {
      color: ${active ? colors.primary[500] : colors.secondary[100]};
      text-decoration: none;
    }

    li {
      padding: 1.6rem;
      background: ${active ? colors.primary[100] : 'none'};
      display: flex;
      align-items: center;
      gap: 0.8rem;
      list-style-type: none;
      border-radius: 1.6rem;
    }
  `
}

export default styles
