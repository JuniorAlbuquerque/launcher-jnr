import { FunctionComponent } from 'react'
import { useRoutes } from 'react-router-dom'

import MainLayout from '@/views/layout/MainLayout'
import { MainRoutes } from './mainRoutes/routes'
import RedirectRoute from './Redirect'

export const Routes: FunctionComponent = () => {
  return useRoutes([
    { element: <MainLayout />, children: [MainRoutes, RedirectRoute] }
  ])
}
