import React, { useEffect, useState } from 'react'
import { MemoryData } from './types'
import socketService, { SocketListener } from '@/services/socket'
import Ping from './Ping'
import CpuUsage from './CpuUsage'
import styles from './styles'

const Home: React.FC = () => {
  const [memoryStatus, setMemoryStatus] = useState<MemoryData>({} as MemoryData)

  useEffect(() => {
    socketService.onMessage(SocketListener.MEMORY, (data: MemoryData) => {
      setMemoryStatus(data)
    })

    // return () => socketService.unlistener()
  }, [])

  return (
    <div css={styles.root}>
      <h3>| Monitor</h3>

      <div className="main">
        <p>Uso de memória: {memoryStatus.actualUse}</p>
        <p>Memoria total: {memoryStatus.total}</p>
        <p>Memoria livre: {memoryStatus.free}</p>

        <div
          style={{
            display: 'flex',
            gap: 16
          }}
        >
          <Ping />
          <CpuUsage />
        </div>
      </div>
    </div>
  )
}

export default Home
