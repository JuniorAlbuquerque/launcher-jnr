import { GameService } from '@/services/backend/Games'
import { IGamesData } from '@/services/backend/Games/types'
import { useQuery } from 'react-query'

type GameQuery = {
  gamesData: IGamesData[]
  gamesLoading: boolean
}

export function useGamesQuery(): GameQuery {
  const { data, isLoading: gamesLoading } = useQuery<IGamesData[], Error>(
    'game-list',
    GameService.getGames,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  )

  const gamesData = data ?? []

  return {
    gamesData,
    gamesLoading
  }
}
