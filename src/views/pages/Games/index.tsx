import { useGamesQuery } from '@/data/queries/gamesQuery'
import React from 'react'

const Games: React.FC = () => {
  const { gamesData } = useGamesQuery()

  return (
    <div>
      {gamesData.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  )
}

export default Games
