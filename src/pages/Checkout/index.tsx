import { Form } from './Form'
import { CheckoutContainer, CoffeesContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <Form />
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <CoffeesContainer />
      </section>
    </CheckoutContainer>
  )
}
