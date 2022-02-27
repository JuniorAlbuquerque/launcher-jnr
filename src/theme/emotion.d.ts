import '@emotion/react'
import { LauncherTheme } from './types'

declare module '@emotion/react' {
  export interface Theme extends LauncherTheme {}
}
