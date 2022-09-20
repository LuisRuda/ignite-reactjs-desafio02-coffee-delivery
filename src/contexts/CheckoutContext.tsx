import { createContext, ReactNode, useReducer, useEffect } from 'react'

import { saveCheckoutFormValuesAction } from '../reducers/checkout/actions'
import { CheckoutReducer } from '../reducers/checkout/reducer'
import { ICheckoutFormData } from '../pages/Checkout'

export interface IUpdateCoffee {
  id: string
  amount: number
}

interface ICheckoutContextType {
  checkoutFormState: ICheckoutFormData
  saveCheckoutFormValues: (formValues: ICheckoutFormData) => void
}

export const CheckoutContext = createContext({} as ICheckoutContextType)

interface ICheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: ICheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(
    CheckoutReducer,
    {
      checkoutFormState: {} as ICheckoutFormData,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:checkout-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        checkoutFormState: {} as ICheckoutFormData,
      }
    },
  )

  const { checkoutFormState } = checkoutState

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)

    localStorage.setItem('@coffee-delivery:checkout-state-1.0.0', stateJSON)
  }, [checkoutState])

  function saveCheckoutFormValues(formValues: ICheckoutFormData) {
    dispatch(saveCheckoutFormValuesAction(formValues))
  }

  return (
    <CheckoutContext.Provider
      value={{
        checkoutFormState,
        saveCheckoutFormValues,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
