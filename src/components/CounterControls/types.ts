export interface ICounterControlsProps {
  smallHeight?: boolean
  amount: number
  onDecrement: () => void
  onIncrement: () => void
  decrementDisabled?: boolean
}
