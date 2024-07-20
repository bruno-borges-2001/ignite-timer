import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import { Container, Wrapper } from './styles'

export default function DefaultLayout() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Wrapper>
  )
}
