import styled from 'styled-components'

export const CardContainer = styled.li`
  list-style: none;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.25rem;
  border-radius: 6px 36px;
  position: relative;
  background: ${({ theme }) => theme['gray-100']};

  > img {
    position: absolute;
    top: -1.25rem;
  }
`

export const Content = styled.div`
  position: absolute;
  top: 7rem;
  text-align: center;
`
