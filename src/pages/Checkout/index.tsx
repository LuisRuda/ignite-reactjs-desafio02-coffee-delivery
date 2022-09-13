import { useContext } from 'react'

import { Trash } from 'phosphor-react'

import { Form } from './components/Form'
import { formCurrency } from '../../utils/format'
import { CartContext, IUpdateCoffee } from '../../contexts/CartContext'
import { CounterControls } from '../../components'
import {
  CheckoutContainer,
  CartContainer,
  CartItem,
  CardInfo,
  TotalContainer,
} from './styles'

export function Checkout() {
  const { coffees, updateCoffee, removeCoffee } = useContext(CartContext)

  function handleIncrement(coffeeUpdate: IUpdateCoffee) {
    updateCoffee(coffeeUpdate)
  }

  function handleDecrement(coffeeUpdate: IUpdateCoffee) {
    if (coffeeUpdate.amount === 0) return

    updateCoffee(coffeeUpdate)
  }

  function handleRemoveCoffee(coffeeId: string) {
    removeCoffee(coffeeId)
  }

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <Form />
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <CartContainer>
          {coffees?.length === 0 && (
            <span>Nenhum café selecionado no momento :(</span>
          )}
          {coffees?.length > 0 && (
            <ul>
              {coffees.map((coffee) => (
                <CartItem key={coffee.id}>
                  <img src={coffee.image} alt={coffee.name} />
                  <CardInfo>
                    <span>{coffee.name}</span>
                    <div>
                      <CounterControls
                        smallHeight
                        amount={coffee.amount}
                        onDecrement={() =>
                          handleDecrement({
                            id: coffee.id,
                            amount: coffee.amount - 1,
                          })
                        }
                        onIncrement={() =>
                          handleIncrement({
                            id: coffee.id,
                            amount: coffee.amount + 1,
                          })
                        }
                        decrementDisabled={coffee.amount === 1}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveCoffee(coffee.id)}
                      >
                        <Trash />
                        REMOVER
                      </button>
                    </div>
                  </CardInfo>
                  <strong>{formCurrency.format(coffee.price)}</strong>
                </CartItem>
              ))}
            </ul>
          )}

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
