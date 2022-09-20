import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    > span {
      gap: 0.25rem;
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      border-radius: 6px;
      padding: 0 0.4rem;
      color: ${({ theme }) => theme['purple-900']};
      background: ${({ theme }) => theme['purple-100']};

      svg {
        color: ${({ theme }) => theme['purple-500']};
      }
    }
  }
`

export const CartLink = styled(NavLink)`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  position: relative;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme['yellow-100']};

  svg {
    color: ${({ theme }) => theme['yellow-900']};
  }

  > span {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.75rem;
    top: -0.5rem;
    right: -0.5rem;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['yellow-900']};
  }
`
