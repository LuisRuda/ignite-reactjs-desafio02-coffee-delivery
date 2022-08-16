import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  FormContainer,
  SectionHeader,
  InputsContainer,
  Input,
  PaymentContainer,
  RadioButtonContainer,
} from './styles'

export function Form() {
  const theme = useTheme()

  return (
    <FormContainer action="">
      <div>
        <SectionHeader>
          <MapPinLine color={theme['yellow-900']} />
          <div>
            <p>Endereço da Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </SectionHeader>
        <InputsContainer>
          <Input type="text" placeholder="CEP" />
          <Input className="street" type="text" placeholder="Rua" />
          <Input min={0} type="number" placeholder="Número" />
          <Input className="flex-1" type="text" placeholder="Complemento" />
          <Input type="text" placeholder="Bairro" />
          <Input className="city" type="text" placeholder="Cidade" />
          <Input className="uf" type="text" placeholder="UF" />
        </InputsContainer>
      </div>

      <div>
        <SectionHeader>
          <CurrencyDollar color={theme['purple-500']} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </SectionHeader>

        <PaymentContainer>
          <RadioButtonContainer className="radio" type="button">
            <label>
              <CreditCard />
              <input hidden type="radio" value="credit-card" />
              Cartão de crédito
            </label>
          </RadioButtonContainer>
          <RadioButtonContainer className="radio" type="button">
            <label>
              <Bank />
              <input hidden type="radio" value="debit-card" />
              Cartão de débito
            </label>
          </RadioButtonContainer>
          <RadioButtonContainer className="radio" type="button">
            <label>
              <Money />
              <input hidden type="radio" value="money" />
              Dinheiro
            </label>
          </RadioButtonContainer>
        </PaymentContainer>
      </div>
    </FormContainer>
  )
}
