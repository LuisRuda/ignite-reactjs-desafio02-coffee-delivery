import { useContext, useState } from 'react'

import { ShoppingCartSimple } from 'phosphor-react'

import { formCurrency } from '../../../../utils/format'
import { CartContext } from '../../../../contexts/CartContext'
import { ICardProps } from './types'
import { CounterControls } from '../../../../components'
import {
  CardContainer,
  Content,
  TagsContainer,
  CardFooter,
  PriceContainer,
  CartButtonsContainer,
} from './styles'

export function Card({ coffee }: ICardProps) {
  const { addNewCoffee } = useContext(CartContext)

  const [amount, setAmount] = useState(0)

  function handleDecrement() {
    if (amount > 0) {
      setAmount((state) => state - 1)
    }
  }

  function handleIncrement() {
    setAmount((state) => state + 1)
  }

  function handleAddNewCoffee() {
    if (amount <= 0) return

    const newCoffee = {
      id: coffee.id,
      name: coffee.name,
      image: coffee.image,
      price: coffee.price,
      amount,
    }

    addNewCoffee(newCoffee)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.name} />
      <Content>
        {coffee.tags.length && (
          <TagsContainer>
            {coffee.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </TagsContainer>
        )}
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>

        <CardFooter>
          <PriceContainer>
            <span>R$</span>
            <span>{formCurrency.format(coffee.price).replace('R$', '')}</span>
          </PriceContainer>
          <CartButtonsContainer>
            <CounterControls
              amount={amount}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />
            <button onClick={handleAddNewCoffee}>
              <ShoppingCartSimple weight="fill" />
            </button>
          </CartButtonsContainer>
        </CardFooter>
      </Content>
    </CardContainer>
  )
}
