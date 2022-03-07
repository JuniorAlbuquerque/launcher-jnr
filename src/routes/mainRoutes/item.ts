import { NavItemTypeItem } from '../types'
import { ReactComponent as HealthIcon } from '@/assets/health.svg'
import { ReactComponent as GameIcon } from '@/assets/game.svg'

export const mainRoutes: NavItemTypeItem[] = [
  {
    id: 'monitor',
    type: 'item',
    title: 'Monitor',
    icon: HealthIcon,
    url: '/monitor'
  },
  {
    id: 'games',
    type: 'item',
    title: 'Games',
    icon: GameIcon,
    url: '/games'
  }
]
