import styled from 'styled-components'

import { NavLink } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg?react'

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem;

  & > nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const Logo = styled(LogoImg)`
  height: 2.5rem;
  width: 2.5rem;
`

export const NavItemContainer = styled(NavLink)`
  position: relative;

  height: 3rem;
  width: 3rem;

  display: grid;
  place-items: center;

  color: ${({ theme }) => theme.gray100};

  &.active {
    color: ${({ theme }) => theme.green};
  }

  &:hover {
    color: ${({ theme }) => theme.green};

    &::after {
      content: '';
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${({ theme }) => theme.green};
    }
  }
`
