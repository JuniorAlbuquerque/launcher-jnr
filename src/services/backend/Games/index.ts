import api from '@/services/http/axios-http-client'
import { IGamesData } from './types'

export class GameService {
  static async getGames() {
    const { data } = await api.get<IGamesData[]>('games')
    return data
  }
}

export default new GameService()
