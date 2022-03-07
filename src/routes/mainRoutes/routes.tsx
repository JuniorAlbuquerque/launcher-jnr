import { RouteObject } from 'react-router-dom'

import Home from '@/views/Home'

export const MainRoutes: RouteObject = {
  children: [
    {
      path: 'monitor',
      element: <Home />
    }
  ]
}
