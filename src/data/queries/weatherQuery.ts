import { WeatherService } from '@/services/backend/Weather'
import { WeatherData } from '@/services/backend/Weather/types'
import { useQuery } from 'react-query'

type WeatherQuery = {
  weatherData: WeatherData
  weatherLoading: boolean
}

export function useWeatherQuery(): WeatherQuery {
  const { data, isLoading: weatherLoading } = useQuery<WeatherData, Error>(
    'weather-data',
    () => WeatherService.getWeatherData(),
    {
      refetchOnWindowFocus: false
    }
  )

  const weatherData = data ?? ({} as WeatherData)

  return {
    weatherData,
    weatherLoading
  }
}
