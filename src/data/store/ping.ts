import create from 'zustand'
import { DataList } from './types'

type PingStore = {
  data: DataList[]
  ping: number
  updateData: (data: number) => void
}

const maxDataValues = 80
const keepDataValues = 40

export const usePingStore = create<PingStore>((set, get) => ({
  data: [
    {
      name: 'ping',
      data: []
    }
  ],
  ping: 0,
  updateData: (pingReceived: number) => {
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
        ping: pingReceived
      }))

      return
    }

    set((state) => {
      return {
        data: [
          ...state.data.map((val) => ({
            name: val.name,
            data: [
              ...val.data,
              {
                x: new Date(),
                y: pingReceived
              }
            ]
          }))
        ],
        ping: pingReceived
      }
    })
  }
}))
