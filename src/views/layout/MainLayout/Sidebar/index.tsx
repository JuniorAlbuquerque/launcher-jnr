import { mainRoutes } from '@/routes/mainRoutes/item'
import React from 'react'
import NavItem from './NavItem'
import styles from './styles'

const Sidebar: React.FC = () => {
  return (
    <div css={styles.root}>
      {mainRoutes.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Sidebar
