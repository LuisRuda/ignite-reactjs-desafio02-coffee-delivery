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
      display: flex;
      align-items: center;
    }

    a {
      width: 2.375rem;
      height: 2.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
