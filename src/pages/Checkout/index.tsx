import { useContext, useEffect } from 'react'

import * as zod from 'zod'
import { Trash } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

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

const checkoutValidationSchema = zod.object({
  zipCode: zod.string().min(9).max(10),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(2).max(2),
  payment: zod.string().min(1),
})

type ICheckoutFormData = zod.infer<typeof checkoutValidationSchema>

export function Checkout() {
  const { coffees, updateCoffee, removeCoffee } = useContext(CartContext)
  const checkoutForm = useForm<ICheckoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })
  const { handleSubmit, formState } = checkoutForm
  const { errors } = formState

  useEffect(() => {
    console.log(errors)
  }, [errors])

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

  function handleConfirmOrder(data: ICheckoutFormData) {
    console.log(data)
  }

  const totalItems = coffees.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.amount
  }, 0)
  const freightValue = coffees.length > 0 ? 3.5 : 0
  const totalCart = totalItems + freightValue

  const confirmOrderButtonDisabled = coffees.length === 0

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <FormProvider {...checkoutForm}>
          <Form />
        </FormProvider>
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
              <span>{formCurrency.format(totalItems)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{formCurrency.format(freightValue)}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{formCurrency.format(totalCart)}</strong>
            </div>
            <button
              type="button"
              disabled={confirmOrderButtonDisabled}
              onClick={handleSubmit(handleConfirmOrder)}
            >
              CONFIRMAR PEDIDO
            </button>
          </TotalContainer>
        </CartContainer>
      </section>
    </CheckoutContainer>
  )
}
