import React, { useEffect } from 'react'
import { CpuData } from '../types'
import socketService, { SocketListener } from '@/services/socket'
import Chart from '@/components/Chart'
import { useCpuUsageStore } from '@/data/store/cpuUsage'
import { lineOptions } from '@/components/Chart/lineOptions'

const CpuUsage: React.FC = () => {
  const { data, cpuUsage, updateData } = useCpuUsageStore()

  const optionsCpu: ApexCharts.ApexOptions = {
    ...lineOptions,
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
      updateData(data?.cpuUsageInPercentage)
    })

    return () => {
      socketService.off(SocketListener.CPU)
    }
  }, [updateData])

  return (
    <Chart
      options={optionsCpu}
      series={data}
      type="area"
      height={120}
      title={`Uso de cpu: ${cpuUsage || ''}`}
      range={{
        min: '5%',
        max: '100%'
      }}
    />
  )
}

export default CpuUsage
