import { mainRoutes } from '@/routes/mainRoutes/item'
import React from 'react'
import NavItem from './NavItem'
import styles from './styles'
import avatar from '@/assets/avatar.png'

const Sidebar: React.FC = () => {
  return (
    <div css={styles.root}>
      <div className="avatar">
        <img src={avatar} alt="AVATAR" />
        <div>
          <p>Júnior Albuquerque</p>
          <span>Level 20</span>
        </div>
      </div>
      {mainRoutes.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Sidebar
