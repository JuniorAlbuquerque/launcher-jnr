import create from 'zustand'
import { DataList } from './types'

type CpuUsageStore = {
  data: DataList[]
  cpuUsage: string
  updateData: (cpuUsage: string) => void
}

const maxDataValues = 80
const keepDataValues = 40

export const useCpuUsageStore = create<CpuUsageStore>((set, get) => ({
  data: [
    {
      name: 'cpu usage',
      data: []
    }
  ],
  cpuUsage: '',
  updateData: (cpuUsage: string) => {
    if (get().data[0].data.length > maxDataValues) {
      const newData = get().data[0].data.slice(
        Math.max(get().data[0].data.length - keepDataValues, 0)
      )

      set((state) => ({
        data: [
          ...state.data.map((val) => ({
            name: val.name,
            data: newData
          }))
        ],
        cpuUsage
      }))

      return
    }

    set((state) => ({
      data: [
        ...state.data.map((val) => {
          return {
            name: val.name,
            data: [
              ...val.data,
              {
                x: new Date(),
                y: cpuUsage
              }
            ]
          }
        })
      ],
      cpuUsage
    }))
  }
}))
