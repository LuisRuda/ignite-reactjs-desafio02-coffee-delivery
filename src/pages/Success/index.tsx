import { useContext } from 'react'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { deliveryImage } from '../../assets'
import { IFormOfPayments } from '../../pages/Checkout'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import {
  SuccessContainer,
  DetailsContainer,
  LineInfoContainer,
  RoundedIcon,
  ImageContainer,
} from './styles'

export function Success() {
  const { checkoutFormState } = useContext(CheckoutContext)

  function getFormOfPayment(payment: IFormOfPayments) {
    const formOfPayments = {
      'credit-card': 'Cartão de Crédito',
      'debit-card': 'Cartão de Débito',
      money: 'Dinheiro',
    }

    return formOfPayments[payment]
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <div>
        <DetailsContainer>
          <section>
            <LineInfoContainer>
              <RoundedIcon background="purple-500">
                <MapPin weight="fill" />
              </RoundedIcon>
              <div>
                <div>
                  <span>Entrega em </span>
                  <strong>{`${checkoutFormState.street}, ${checkoutFormState.number}`}</strong>
                </div>
                <span>{`${checkoutFormState.district} - ${checkoutFormState.city}, ${checkoutFormState.state}`}</span>
              </div>
            </LineInfoContainer>

            <LineInfoContainer>
              <RoundedIcon background="yellow-500">
                <Timer weight="fill" />
              </RoundedIcon>
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min </strong>
              </div>
            </LineInfoContainer>

            <LineInfoContainer>
              <RoundedIcon background="yellow-900">
                <CurrencyDollar />
              </RoundedIcon>
              <div>
                <span>Pagamento na entrega</span>
                <strong>{getFormOfPayment(checkoutFormState.payment)}</strong>
              </div>
            </LineInfoContainer>
          </section>
        </DetailsContainer>

        <ImageContainer>
          <img
            src={deliveryImage}
            alt="Imagem de motoboy entregando seu pedido"
          />
        </ImageContainer>
      </div>
    </SuccessContainer>
  )
}
