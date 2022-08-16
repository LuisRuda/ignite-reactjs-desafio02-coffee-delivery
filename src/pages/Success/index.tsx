import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { deliveryImage } from '../../assets'
import { SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <div>
        <section>
          <div>
            <div>
              <MapPin weight="fill" />
            </div>
            <div>
              <span>Entrega em </span>
              <span>Rua João Daniel Martinelli, 102</span>
            </div>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>

          <div>
            <div>
              <Timer weight="fill" />
            </div>
            <span>Previsão de entrega</span>
            <span>20 min - 30 min </span>
          </div>

          <div>
            <div>
              <CurrencyDollar />
            </div>
            <span>Pagamento na entrega</span>
            <span>Cartão de Crédito</span>
          </div>
        </section>

        <img
          src={deliveryImage}
          alt="Imagem de motoboy entregando seu pedido"
        />
      </div>
    </SuccessContainer>
  )
}
