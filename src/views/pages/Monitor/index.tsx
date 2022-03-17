import React, { Fragment, useEffect, useState } from 'react'
import { MemoryData } from './types'
import socketService, { SocketListener } from '@/services/socket'
import Ping from './Ping'
import CpuUsage from './CpuUsage'
import styles from './styles'
import { useWeatherQuery } from '@/data/queries/weatherQuery'
import { ReactComponent as IconDate } from '@/assets/icons/date.svg'
import { ReactComponent as IconHumidity } from '@/assets/icons/humidity.svg'

const Monitor: React.FC = () => {
  const [memoryStatus, setMemoryStatus] = useState<MemoryData>({} as MemoryData)
  const { weatherData, weatherLoading } = useWeatherQuery()

  useEffect(() => {
    socketService.onMessage(SocketListener.MEMORY, (data: MemoryData) => {
      setMemoryStatus(data)
    })

    return () => {
      socketService.off(SocketListener.MEMORY)
    }
  }, [])

  return (
    <div css={styles.root}>
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
          {/* <Ping /> */}
          {/* <CpuUsage /> */}
        </div>
      </div>

      <div css={styles.rightContent}>
        <div className="weather-content">
          {weatherLoading ? (
            <span>Carregando...</span>
          ) : (
            <Fragment>
              <p>{weatherData?.location?.city}</p>

              <div className="weather-content__temp">
                <img src={`http://${weatherData?.condition?.icon}`} alt="" />
                <h1>{weatherData?.info?.temp_c}</h1>
                <span>°C</span>
              </div>

              <div className="weather-content__info">
                <span>
                  <img src={`http://${weatherData?.condition?.icon}`} alt="" />
                  {weatherData?.condition?.text}
                </span>

                <span>
                  <IconDate />
                  {weatherData?.info?.last_updated}
                </span>

                <span>
                  <IconHumidity />
                  {`${weatherData?.info?.humidity} %`}
                </span>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Monitor
