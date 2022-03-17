import Chart from '@/components/Chart'
import { FunctionComponent, useEffect, useState } from 'react'
import styles from './styles'
import socketService, { SocketListener } from '@/services/socket'
import { radialOptions } from '@/components/Chart/radialOptions'

type DiskData = {
  filesystem: string
  free: string
  total: string
  usedpct: number
}

type DiskOptionsChart = {
  [key: string]: ApexCharts.ApexOptions
}

const Disks: FunctionComponent = () => {
  const [diskList, setDiskList] = useState<DiskData[]>([])
  const [diskOptionsChart, setDiskOptionsChart] = useState<DiskOptionsChart>(
    {} as DiskOptionsChart
  )

  useEffect(() => {
    socketService.onMessage(SocketListener.DISK, (data: DiskData[]) => {
      setDiskList(data)
      let options = {}

      data?.forEach((item) => {
        options = {
          ...options,
          [item.filesystem]: {
            ...radialOptions,
            labels: [item?.filesystem]
          }
        }
      })

      setDiskOptionsChart(options)
    })

    return () => {
      socketService.off(SocketListener.DISK)
    }
  }, [])

  useEffect(() => {
    console.log(diskOptionsChart)
  }, [diskOptionsChart])

  if (!diskList?.length) return null

  return (
    <div css={styles.root}>
      {diskList?.map((item) => (
        <div key={item.filesystem}>
          <Chart
            type="radialBar"
            height={120}
            series={[item.usedpct]}
            options={diskOptionsChart[item.filesystem]}
            withoutBg
          />
          <span>{item.free} livres</span>
        </div>
      ))}
    </div>
  )
}

export default Disks
