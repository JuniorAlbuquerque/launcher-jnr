import React from 'react'
import styles from './styles'
import { useLocation } from 'react-router-dom'
import { mainRoutes } from '@/routes/mainRoutes/items'

const Head: React.FC = () => {
  const location = useLocation()
  const actualRoute = mainRoutes.find((item) => item.url === location.pathname)

  return (
    <div css={styles.root}>
      <h3>| {actualRoute?.title || 'Home'}</h3>
    </div>
  )
}

export default Head
