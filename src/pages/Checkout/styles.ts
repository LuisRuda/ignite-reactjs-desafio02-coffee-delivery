import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  gap: 2rem;
  display: grid;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 28rem;

  > section {
    h2 {
      line-height: 1.3;
      font-weight: 700;
      font-size: 1.125rem;
      font-family: 'Baloo 2';
      margin-bottom: 0.9375rem;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 25rem;
  }

  @media (max-width: 940px) {
    justify-content: center;
    grid-template-columns: 0.8fr;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`

export const CartContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  background: ${({ theme }) => theme['gray-100']};
  border-radius: 6px 44px;

  ul {
    list-style: none;
    margin-bottom: 1.5rem;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-300']};

  & + & {
    padding-top: 1.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const CardInfo = styled.div`
  flex: 1;

  > span {
    font-size: 1rem;
    line-height: 1.3;
  }

  > div {
    gap: 0.5rem;
    display: flex;
    margin-top: 0.5rem;
    align-items: center;

    > button {
      gap: 0.25rem;
      height: 2rem;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      padding: 0.5rem;
      border-radius: 6px;
      transition: background 0.2s;
      background: ${({ theme }) => theme['gray-300']};

      &:hover {
        color: ${({ theme }) => theme['gray-800']};
        background: ${({ theme }) => theme['gray-400']};
      }

      svg {
        width: 0.9rem;
        height: 1rem;
        color: ${({ theme }) => theme['purple-500']};
      }
    }
  }

  > span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const TotalContainer = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    > span {
      font-size: 1rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['gray-700']};

      &:first-child {
        font-size: 0.875rem;
      }
    }

    > strong {
      font-size: 1.25rem;
    }
  }

  > button {
    width: 100%;
    border: none;
    cursor: pointer;
    height: 2.875rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    font-weight: 700;
    font-size: 0.875rem;
    transition: background 0.2s;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['yellow-500']};

    &:hover {
      background: ${({ theme }) => theme['yellow-900']};
    }
  }
`
