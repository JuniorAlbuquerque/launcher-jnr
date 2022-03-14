import { RouteObject } from 'react-router-dom'

import Monitor from '@/views/pages/Monitor'
import Games from '@/views/pages/Games'
import Settings from '@/views/pages/Settings'

export const MainRoutes: RouteObject = {
  children: [
    {
      path: 'monitor',
      element: <Monitor />
    },
    {
      path: 'games',
      element: <Games />
    },
    {
      path: 'settings',
      element: <Settings />
    }
  ]
}
