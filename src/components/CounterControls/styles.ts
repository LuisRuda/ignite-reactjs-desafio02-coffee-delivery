import styled, { css } from 'styled-components'

interface ICounterContainer {
  smallHeight?: boolean
}

export const CounterContainer = styled.div<ICounterContainer>`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-300']};

  ${(props) =>
    props.smallHeight &&
    css`
      height: 2rem;
    `}

  button {
    flex: 1;
    height: 2.375rem;
    cursor: pointer;
    border: none;
    background: none;
    box-shadow: none;

    svg {
      width: 0.875rem;
      height: 0.875rem;
      color: ${({ theme }) => theme['purple-500']};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme['purple-900']};
      }
    }
  }

  span {
    width: 1.25rem;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme['gray-900']};
  }
`
