import { mainRoutes } from '@/routes/mainRoutes/items'
import React from 'react'
import NavItem from './NavItem'
import styles from './styles'
import avatar from '@/assets/avatar.png'
import { useUserQuery } from '@/data/queries/userQuery'
import Disks from './Disks'
import Ping from '@/views/pages/Monitor/Ping'
import CpuUsage from '@/views/pages/Monitor/CpuUsage'

const Sidebar: React.FC = () => {
  const { userData } = useUserQuery()

  const sidebarItems = mainRoutes.map((item) => (
    <NavItem key={item.id} item={item} />
  ))

  return (
    <div css={styles.root}>
      <div className="avatar">
        <img src={avatar} alt="AVATAR" />
        <div>
          <p>{userData?.username}</p>
          <span>level {userData?.level}</span>
        </div>
      </div>
      {sidebarItems}
      <div className="charts">
        <Disks />
        <Ping />
        <CpuUsage />
      </div>
    </div>
  )
}

export default Sidebar
