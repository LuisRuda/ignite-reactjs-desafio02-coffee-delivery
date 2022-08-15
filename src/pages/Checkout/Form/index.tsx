import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { FormContainer, SectionHeader } from './styles'

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
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
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
        <div className="radio">
          <label>
            <input type="radio" value="credit-card" />
            Cartão de crédito
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="debit-card" />
            Cartão de débito
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="money" />
            Dinheiro
          </label>
        </div>
      </div>
    </FormContainer>
  )
}
