import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    > span {
      gap: 0.25rem;
      width: 8.93rem;
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      border-radius: 6px;
      color: ${({ theme }) => theme['purple-900']};
      background: ${({ theme }) => theme['purple-100']};

      svg {
        color: ${({ theme }) => theme['purple-500']};
      }
    }

    a {
      width: 2.375rem;
      height: 2.375rem;
      display: flex;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme['yellow-100']};

      svg {
        color: ${({ theme }) => theme['yellow-900']};
      }
    }
  }
`
