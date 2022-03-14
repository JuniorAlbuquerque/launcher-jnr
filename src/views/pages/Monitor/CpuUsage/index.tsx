import React, { useEffect, useState } from 'react'
import { CpuData } from '../types'
import socketService, { SocketListener } from '@/services/socket'
import Chart from '@/components/Chart'

interface DataList {
  name: string
  data: Array<{
    x: Date
    y: string | number
  }>
}

const CpuUsage: React.FC = () => {
  const [cpuStatus, setCpuStatus] = useState<CpuData>({} as CpuData)
  const [cpuArr, setCpuArr] = useState<DataList[]>([
    {
      name: 'Cpu usage',
      data: []
    }
  ])

  const optionsCpu: ApexCharts.ApexOptions = {
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (val) {
          return val ? val + '%' : ''
        },
        show: false
      }
    }
  }

  useEffect(() => {
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

    // return () => socketService.unlistener()
  }, [])

  return (
    <Chart
      options={optionsCpu}
      series={cpuArr}
      title={`Uso de cpu: ${cpuStatus.cpuUsageInPercentage || ''}`}
      range={{
        min: '5%',
        max: '100%'
      }}
    />
  )
}

export default CpuUsage
