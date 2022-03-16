export interface WeatherCondition {
  text: string
  icon: string
}

export interface WeatherLocation {
  city: string
  region: string
  country: string
  localtime: string
}

export interface WeatherCurrent {
  last_updated: string
  temp_c: number
  is_day: number
  humidity: number
  cloud: number
}

export type WeatherData = {
  location: WeatherLocation
  condition: WeatherCondition
  info: WeatherCurrent
}
