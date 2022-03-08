import React, { useEffect, useState } from 'react'
import socketService, { SocketListener } from '@/services/socket'
import Chart from '@/components/Chart'

interface DataList {
  name: string
  data: Array<{
    x: Date
    y: string | number
  }>
}

const Ping: React.FC = () => {
  const [ping, setPing] = useState<number>(0)
  const [pingArr, setPingArr] = useState<DataList[]>([
    {
      name: 'ping',
      data: []
    }
  ])

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
      setPing(pingReceived)
      setPingArr((prevState) =>
        prevState.map((val) => {
          return {
            name: val.name,
            data: [
              ...val.data,
              {
                x: new Date(),
                y: pingReceived
              }
            ]
          }
        })
      )
    })

    // return () => socketService.unlistener()
  }, [])

  return (
    <Chart
      options={optionsPing}
      series={pingArr}
      title={`Ping: ${ping}`}
      range={{
        min: 50,
        max: 100
      }}
    />
  )
}

export default Ping
