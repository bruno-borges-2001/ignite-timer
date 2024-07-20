import { cloneElement } from 'react'
import { NavItemContainer } from './styles'

export interface NavItemProps {
  href: string
  icon: React.ReactElement
}

export default function NavItem({ href, icon }: NavItemProps) {
  return (
    <NavItemContainer to={href}>
      {cloneElement(icon, { size: 24 })}
    </NavItemContainer>
  )
}
