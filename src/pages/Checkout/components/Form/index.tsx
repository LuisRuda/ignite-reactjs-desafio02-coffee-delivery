import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  SectionHeader,
  InputsContainer,
  Input,
  ErrorText,
  PaymentContainer,
  RadioButtonContainer,
} from './styles'

export function Form() {
  const theme = useTheme()
  const { register, watch, formState } = useFormContext()
  const { errors } = formState

  const paymentSelected = watch('payment')

  return (
    <FormContainer>
      <div>
        <SectionHeader>
          <MapPinLine color={theme['yellow-900']} />
          <div>
            <p>Endereço da Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </SectionHeader>
        <InputsContainer>
          <Input
            type="text"
            placeholder="CEP"
            {...register('zipCode')}
            hasError={!!errors.zipCode}
          />
          <Input
            className="street"
            type="text"
            placeholder="Rua"
            {...register('street')}
            hasError={!!errors.street}
          />
          <Input
            min={0}
            type="number"
            placeholder="Número"
            {...register('number')}
            hasError={!!errors.number}
          />
          <Input
            className="flex-1"
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            hasError={!!errors.complement}
          />
          <Input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            hasError={!!errors.district}
          />
          <Input
            className="city"
            type="text"
            placeholder="Cidade"
            {...register('city')}
            hasError={!!errors.city}
          />
          <Input
            className="uf"
            type="text"
            placeholder="UF"
            list="state-suggestions"
            {...register('state')}
            hasError={!!errors.state}
          />
          <datalist id="state-suggestions">
            <option value="AC" />
            <option value="AL" />
            <option value="AP" />
            <option value="AM" />
            <option value="BA" />
            <option value="CE" />
            <option value="DF" />
            <option value="ES" />
            <option value="GO" />
            <option value="MA" />
            <option value="MT" />
            <option value="MS" />
            <option value="MG" />
            <option value="PA" />
            <option value="PB" />
            <option value="PR" />
            <option value="PE" />
            <option value="PI" />
            <option value="RJ" />
            <option value="RN" />
            <option value="RS" />
            <option value="RO" />
            <option value="RR" />
            <option value="SC" />
            <option value="SP" />
            <option value="SE" />
            <option value="TO" />
          </datalist>
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
        {errors.payment && (
          <ErrorText>Seleciona a forma de pagamento!</ErrorText>
        )}

        <PaymentContainer>
          <RadioButtonContainer
            className="radio"
            type="button"
            selected={paymentSelected === 'credit-card'}
          >
            <label>
              <CreditCard />
              <input
                hidden
                type="radio"
                value="credit-card"
                {...register('payment')}
              />
              Cartão de crédito
            </label>
          </RadioButtonContainer>
          <RadioButtonContainer
            className="radio"
            type="button"
            selected={paymentSelected === 'debit-card'}
          >
            <label>
              <Bank />
              <input
                hidden
                type="radio"
                value="debit-card"
                {...register('payment')}
              />
              Cartão de débito
            </label>
          </RadioButtonContainer>
          <RadioButtonContainer
            className="radio"
            type="button"
            selected={paymentSelected === 'money'}
          >
            <label>
              <Money />
              <input
                hidden
                type="radio"
                value="money"
                {...register('payment')}
              />
              Dinheiro
            </label>
          </RadioButtonContainer>
        </PaymentContainer>
      </div>
    </FormContainer>
  )
}
