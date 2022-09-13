import { Minus, Plus } from 'phosphor-react'

import { ICounterControlsProps } from './types'
import { CounterContainer } from './styles'

export function CounterControls({
  smallHeight,
  amount,
  onDecrement,
  onIncrement,
  decrementDisabled,
}: ICounterControlsProps) {
  const isDecrementDisabled = amount === 0

  return (
    <CounterContainer smallHeight={smallHeight}>
      <button
        onClick={onDecrement}
        disabled={decrementDisabled || isDecrementDisabled}
      >
        <Minus weight="fill" />
      </button>
      <span>{amount}</span>
      <button onClick={onIncrement}>
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  )
}
