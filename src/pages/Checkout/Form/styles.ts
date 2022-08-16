import styled, { css } from 'styled-components'

export const FormContainer = styled.form`
  > div {
    flex: 1;
    padding: 2.5rem;
    border-radius: 6px;

    background: ${({ theme }) => theme['gray-100']};

    &:last-child {
      margin-top: 0.75rem;
    }
  }

  @media (max-width: 528px) {
    > div {
      &:last-child {
        height: 18rem;
      }
    }
  }
`

export const SectionHeader = styled.div`
  gap: 0.5rem;
  display: flex;
  line-height: 1.3;
  margin-bottom: 2rem;
  align-items: flex-start;

  > svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.125rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 0.5rem;

  .uf {
    width: 15%;
  }

  .street {
    width: 100%;
  }

  .city {
    flex: 1;
  }

  .flex-1 {
    flex: 1;
  }
`

export const Input = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};
  background: ${({ theme }) => theme['gray-200']};
  border: 1px solid ${({ theme }) => theme['gray-300']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['yellow-900']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const PaymentContainer = styled.div`
  gap: 0.75rem;
  display: grid;
  height: 3.1875rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 528px) {
    justify-content: center;
    grid-template-columns: 12rem;
  }
`

interface IRadioButtonContainer {
  selected?: boolean
}

export const RadioButtonContainer = styled.button<IRadioButtonContainer>`
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-300']};
  transition: background 0.2s;

  &:hover {
    ${(props) =>
      !props.selected &&
      css`
        background: ${({ theme }) => theme['gray-400']};

        label {
          color: ${({ theme }) => theme['gray-800']};
        }
      `}
  }

  ${(props) =>
    props.selected &&
    css`
      background: ${({ theme }) => theme['purple-100']};
      border: 1px solid ${({ theme }) => theme['purple-500']};
    `}

  label {
    gap: 0.75rem;
    display: flex;
    cursor: pointer;
    line-height: 1.6;
    font-size: 0.75rem;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme['gray-700']};

    svg {
      width: 0.9rem;
      height: 0.9rem;
      color: ${({ theme }) => theme['purple-500']};
    }
  }

  @media (max-width: 528px) {
    height: 2rem;
  }
`
