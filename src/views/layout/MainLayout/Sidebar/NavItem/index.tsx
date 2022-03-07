import { NavItemTypeItem } from '@/routes/types'
import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import styles from './styles'
// import { Container } from './styles';

type NavItemProps = {
  item: NavItemTypeItem
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const paramsMatch = useMatch(item?.url!)
  const isMatch = paramsMatch?.pathname === item?.url!

  const Icon = item?.icon!
  const itemIcon = item?.icon ? <Icon width="1.6rem" height="1.6rem" /> : null

  return (
    <div css={(theme) => styles.wrapper(theme, isMatch)}>
      <Link to={item.url!}>
        <li>
          {itemIcon}
          {item.title}
        </li>
      </Link>
    </div>
  )
}

export default NavItem
