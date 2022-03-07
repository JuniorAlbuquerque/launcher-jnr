import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import styles from './styles'

const MainLayout: React.FC = () => {
  return (
    <div css={styles.root}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
