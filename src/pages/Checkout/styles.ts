import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  gap: 2rem;
  display: grid;
  margin-top: 2.5rem;
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
`

export const CartContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  background: ${({ theme }) => theme['gray-100']};
  border-radius: 6px 44px;
`
