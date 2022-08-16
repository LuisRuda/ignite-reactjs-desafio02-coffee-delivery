import { Trash } from 'phosphor-react'

import { Form } from './Form'
import { CounterControls } from '../../components'
import { CheckoutContainer, CartContainer } from './styles'

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
            <li>
              <img src="" alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <div>
                  <CounterControls smallHeight />
                  <button type="button">
                    <Trash />
                    Remover
                  </button>
                </div>
              </div>
              <span>R$ 9,90</span>
            </li>
          </ul>

          <div>
            <div>
              <span>Total de items</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
            <button type="button">CONFIRMAR PEDIDO</button>
          </div>
        </CartContainer>
      </section>
    </CheckoutContainer>
  )
}
