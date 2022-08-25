import { Minus, Plus } from 'phosphor-react'

import { ICounterControlsProps } from './types'
import { CounterContainer } from './styles'

export function CounterControls({
  smallHeight,
  amount,
  onDecrement,
  onIncrement,
}: ICounterControlsProps) {
  return (
    <CounterContainer smallHeight={smallHeight}>
      <button onClick={onDecrement}>
        <Minus weight="fill" />
      </button>
      <span>{amount}</span>
      <button onClick={onIncrement}>
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  )
}
