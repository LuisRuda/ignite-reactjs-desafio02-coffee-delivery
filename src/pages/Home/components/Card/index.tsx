import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'

import { formCurrency } from '../../../../utils/format'
import { ICardProps } from './types'
import {
  CardContainer,
  Content,
  TagsContainer,
  CardFooter,
  PriceContainer,
  CartButtonsContainer,
  CounterControlsContainer,
} from './styles'

export function Card({ coffee }: ICardProps) {
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
            <CounterControlsContainer>
              <button>
                <Minus weight="fill" />
              </button>
              <span>0</span>
              <button>
                <Plus weight="fill" />
              </button>
            </CounterControlsContainer>
            <button>
              <ShoppingCartSimple weight="fill" />
            </button>
          </CartButtonsContainer>
        </CardFooter>
      </Content>
    </CardContainer>
  )
}
