import React, { useEffect } from 'react'
import socketService, { SocketListener } from '@/services/socket'
import Chart from '@/components/Chart'
import { usePingStore } from '@/data/store/ping'
import { lineOptions } from '@/components/Chart/lineOptions'

const Ping: React.FC = () => {
  const { data, ping, updateData } = usePingStore()

  const optionsPing: ApexCharts.ApexOptions = {
    ...lineOptions,
    yaxis: {
      min: 50,
      max: 120,
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
      type="area"
      height={120}
      title={`Ping: ${ping}`}
      range={{
        min: 50,
        max: 120
      }}
    />
  )
}

export default Ping
