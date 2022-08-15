import styled from 'styled-components'

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
