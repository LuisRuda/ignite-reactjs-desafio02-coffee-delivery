import { Trash } from 'phosphor-react'

import { Form } from './Form'
import { menuCoffeeTraditional, menuCapuccino } from '../../assets'
import { CounterControls } from '../../components'
import {
  CheckoutContainer,
  CartContainer,
  CartItem,
  CardInfo,
  TotalContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <Form />
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <CartContainer>
          <ul>
            <CartItem>
              <img src={menuCoffeeTraditional} alt="Café tradicional" />
              <CardInfo>
                <span>Expresso Tradicional</span>
                <div>
                  <CounterControls smallHeight />
                  <button type="button">
                    <Trash />
                    REMOVER
                  </button>
                </div>
              </CardInfo>
              <strong>R$ 9,90</strong>
            </CartItem>
            <CartItem>
              <img src={menuCapuccino} alt="Café tradicional" />
              <CardInfo>
                <span>Capuccino</span>
                <div>
                  <CounterControls smallHeight />
                  <button type="button">
                    <Trash />
                    REMOVER
                  </button>
                </div>
              </CardInfo>
              <strong>R$ 9,90</strong>
            </CartItem>
          </ul>

          <TotalContainer>
            <div>
              <span>Total de items</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
            <button type="button">CONFIRMAR PEDIDO</button>
          </TotalContainer>
        </CartContainer>
      </section>
    </CheckoutContainer>
  )
}
