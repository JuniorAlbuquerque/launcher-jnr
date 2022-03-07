import { FunctionComponent, SVGProps } from 'react'

export type NaveItem = {
  id?: string
  target?: boolean
  external?: string
  title?: React.ReactNode | string
  color?: 'primary' | 'secondary' | 'default' | undefined
  disabled?: boolean
}

export interface NavItemTypeItem extends NaveItem {
  type: 'item'
  url?: string
  icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
}
