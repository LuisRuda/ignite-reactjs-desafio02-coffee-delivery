import styled from 'styled-components'

export const CardContainer = styled.li`
  list-style: none;
  width: 100%;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  position: relative;
  background: ${({ theme }) => theme['gray-100']};

  > img {
    position: absolute;
    top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const Content = styled.div`
  position: absolute;
  top: 7rem;
  bottom: 0;
  text-align: center;
  padding: 0 1.25rem;

  > strong {
    line-height: 1.3;
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    margin-bottom: 0.5rem;
  }

  > p {
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-600']};
  }
`

export const TagsContainer = styled.div`
  flex: 1;
  gap: 0.25rem;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;

  > span {
    line-height: 1.3;
    font-weight: 700;
    font-size: 0.625rem;
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-900']};
    background: ${({ theme }) => theme['yellow-100']};
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 1.5rem;
  left: 1.25rem;
  right: 1.25rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    &:first-child {
      line-height: 1.3;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['gray-700']};
    }

    &:last-child {
      line-height: 1.3;
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
      color: ${({ theme }) => theme['gray-700']};
    }
  }
`

export const CartButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    border: none;
    display: flex;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    margin-left: 0.5rem;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme['purple-900']};
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme['purple-500']};
    }

    > svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${({ theme }) => theme.white};
    }
  }
`
