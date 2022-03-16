import api from '@/services/http/axios-http-client'
import { WeatherData } from './types'

export class WeatherService {
  static async getWeatherData() {
    const { data } = await api.get<WeatherData>('weather')

    return data
  }
}
