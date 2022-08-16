import { Minus, Plus } from 'phosphor-react'

import { ICounterControlsProps } from './types'
import { CounterContainer } from './styles'

export function CounterControls({ smallHeight }: ICounterControlsProps) {
  return (
    <CounterContainer smallHeight={smallHeight}>
      <button>
        <Minus weight="fill" />
      </button>
      <span>0</span>
      <button>
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  )
}
