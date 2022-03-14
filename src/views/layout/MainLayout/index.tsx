import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from './Head'
import Sidebar from './Sidebar'
import styles from './styles'

const MainLayout: React.FC = () => {
  return (
    <div css={styles.root}>
      <div>
        <Sidebar />
      </div>
      <div css={styles.main}>
        <Head />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
