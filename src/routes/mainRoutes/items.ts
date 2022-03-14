import { NavItemTypeItem } from '../types'
import { ReactComponent as HealthIcon } from '@/assets/health.svg'
import { ReactComponent as GameIcon } from '@/assets/game.svg'
import { ReactComponent as SettingsIcon } from '@/assets/settings.svg'

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
  },
  {
    id: 'settings',
    type: 'item',
    title: 'Settings',
    icon: SettingsIcon,
    url: '/settings'
  }
]
