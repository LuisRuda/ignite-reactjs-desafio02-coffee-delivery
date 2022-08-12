import styled from 'styled-components'

export const HomeContainer = styled.div`
  > section {
    gap: 3.5rem;
    display: flex;
    flex-direction: row;
    margin: 5.75rem 0;
  }

  @media (max-width: 992px) {
    > section {
      gap: 2.5rem;
      margin: 4rem 0;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    > section {
      gap: 1.5rem;
      margin: 3rem 0;
    }
  }
`

export const InfoContainer = styled.div`
  width: 36.75rem;

  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.3;
  font-weight: 800;
  margin-bottom: 1rem;
  font-family: 'Baloo 2', cursive;
  color: ${({ theme }) => theme['gray-900']};
`

export const Subtitle = styled.h2`
  font-weight: 400;
  line-height: 1.3;
  font-size: 1.25rem;
`

export const DetailsContainer = styled.div`
  margin-top: 4.125rem;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-items: flex-start;

  @media (max-width: 1120px) {
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Detail = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['gray-700']};
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`

interface IconRoundedBaseProps {
  background?: 'yellow-500' | 'yellow-900' | 'purple-500'
}

export const IconRoundedBase = styled.div<IconRoundedBaseProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background ? props.theme[props.background] : props.theme['gray-700']};

  svg {
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

  @media (max-width: 992px) {
    img {
      width: 50%;
      margin: 0 auto;
    }
  }
`

export const MenuContainer = styled.main`
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
  }
`

export const MenuList = styled.ul`
  margin-top: 3.375rem;
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
