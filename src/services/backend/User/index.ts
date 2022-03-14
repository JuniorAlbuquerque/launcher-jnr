import api from '@/services/http/axios-http-client'
import { IUserData, IUserParams } from './types'

export class UserService {
  static async login(params: IUserParams) {
    const { data } = await api.post<IUserData>('login', params)
    return data
  }
}

export default new UserService()
