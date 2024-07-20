import { Scroll, Timer } from 'phosphor-react'
import NavItem from './NavItem'
import { Container, Logo } from './styles'

export default function Header() {
  return (
    <Container>
      <Logo />
      <nav>
        <NavItem href="/" icon={<Timer />} />
        <NavItem href="/history" icon={<Scroll />} />
      </nav>
    </Container>
  )
}
