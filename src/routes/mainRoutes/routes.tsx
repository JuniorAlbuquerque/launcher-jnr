import { RouteObject } from 'react-router-dom'

import Home from '@/views/Home'
import Games from '@/views/Games'

export const MainRoutes: RouteObject = {
  children: [
    {
      path: 'monitor',
      element: <Home />
    },
    {
      path: 'games',
      element: <Games />
    }
  ]
}
