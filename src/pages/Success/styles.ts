import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 0.25rem;
    font-family: 'Baloo 2';
    color: ${({ theme }) => theme['yellow-900']};
  }

  h2 {
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.25rem;
  }

  > div {
    gap: 6.375rem;
    display: grid;
    margin-top: 2.5rem;
    grid-template-columns: 32rem 1fr;
  }

  @media (max-width: 850px) {
    text-align: center;

    > div {
      justify-content: center;
      grid-template-columns: 30rem;
    }
  }

  @media (max-width: 490px) {
    > div {
      grid-template-columns: 22rem;
    }
  }
`

export const DetailsContainer = styled.div`
  flex: 1;
  padding: 1px;
  border-radius: 6px 37px;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme['yellow-500']}, ${theme['purple-500']})`};

  section {
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    border-radius: 6px 36px;
    background: ${({ theme }) => theme.white};
  }
`

export const LineInfoContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;

  & + & {
    margin-top: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  span,
  strong {
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
  }
`

interface IRoundedIcon {
  background: 'yellow-500' | 'yellow-900' | 'purple-500'
}

export const RoundedIcon = styled.div<IRoundedIcon>`
  width: 2rem;
  height: 2rem;
  display: flex;
  border-radius: 50%;
  align-items: center;
  margin-right: 0.75rem;
  justify-content: center;
  background: ${(props) => props.theme[props.background]};

  > svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.white};
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    object-fit: contain;
  }

  /* @media (max-width: 992px) {
    img {
      width: 50%;
      margin: 0 auto;
    }
  } */
`
