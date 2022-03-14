import { UserService } from '@/services/backend/User'
import { IUserData } from '@/services/backend/User/types'
import { useQuery } from 'react-query'

type UserQuery = {
  userData: IUserData
  userLoading: boolean
}

export function useUserQuery(): UserQuery {
  const { data, isLoading: userLoading } = useQuery<IUserData, Error>(
    'user-login',
    () =>
      UserService.login({
        username: 'jnralb',
        password: 'secret'
      }),
    {
      refetchOnWindowFocus: false
    }
  )

  const userData = data ?? ({} as IUserData)

  return {
    userData,
    userLoading
  }
}
