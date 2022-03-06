import React, { useEffect, useState } from 'react'
import { CpuData, MemoryData } from './types'
import socketService, { SocketListener } from '@/services/socket'
import Chart from '@/components/Chart'

interface DataList {
  name: string
  data: Array<{
    x: Date
    y: string | number
  }>
}

const Home: React.FC = () => {
  const [memoryStatus, setMemoryStatus] = useState<MemoryData>({} as MemoryData)
  const [cpuStatus, setCpuStatus] = useState<CpuData>({} as CpuData)
  const [ping, setPing] = useState<number>(0)
  const [pingArr, setPingArr] = useState<DataList[]>([
    {
      name: 'pingData',
      data: []
    }
  ])

  const [cpuArr, setCpuArr] = useState<DataList[]>([
    {
      name: 'cpuData',
      data: []
    }
  ])

  const optionsPing: ApexCharts.ApexOptions = {
    title: {
      text: `Ping: ${ping}`
    },
    yaxis: {
      min: 50,
      max: 9
    }
  }

  const optionsCpu: ApexCharts.ApexOptions = {
    title: {
      text: `Uso de cpu: ${cpuStatus.cpuUsageInPercentage || 0}`
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (val) {
          return val ? val + '%' : ''
        }
      }
    }
  }

  useEffect(() => {
    socketService.onMessage(SocketListener.MEMORY, (data: MemoryData) => {
      setMemoryStatus(data)
    })

    socketService.onMessage(SocketListener.CPU, (data: CpuData) => {
      setCpuStatus(data)
      setCpuArr((prevState) =>
        prevState.map((val) => {
          return {
            name: val.name,
            data: [
              ...val.data,
              {
                x: new Date(),
                y: data.cpuUsageInPercentage
              }
            ]
          }
        })
      )
    })

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

    return () => socketService.unlistener()
  }, [])

  return (
    <div>
      <p>Uso de memória: {memoryStatus.actualUse}</p>
      <p>Memoria total: {memoryStatus.total}</p>
      <p>Memoria livre: {memoryStatus.free}</p>

      <div
        style={{
          display: 'flex',
          gap: 16
        }}
      >
        <Chart options={optionsPing} series={pingArr} />
        <Chart options={optionsCpu} series={cpuArr} />
      </div>
    </div>
  )
}

export default Home
