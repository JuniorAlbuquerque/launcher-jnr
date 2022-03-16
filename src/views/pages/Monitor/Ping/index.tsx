import React, { useEffect } from 'react'
import socketService, { SocketListener } from '@/services/socket'
import Chart from '@/components/Chart'
import { usePingStore } from '@/data/store/ping'

const Ping: React.FC = () => {
  const { data, ping, updateData } = usePingStore()

  const optionsPing: ApexCharts.ApexOptions = {
    yaxis: {
      min: 50,
      max: 96,
      labels: {
        show: false
      }
    }
  }

  useEffect(() => {
    socketService.onMessage(SocketListener.PING, (pingReceived: number) => {
      updateData(pingReceived)
    })

    return () => {
      socketService.off(SocketListener.PING)
    }
  }, [updateData])

  return (
    <Chart
      options={optionsPing}
      series={data}
      title={`Ping: ${ping}`}
      range={{
        min: 50,
        max: 100
      }}
    />
  )
}

export default Ping
