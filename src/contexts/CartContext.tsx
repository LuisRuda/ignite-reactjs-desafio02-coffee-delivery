import { createContext, ReactNode, useReducer, useEffect } from 'react'

import { addNewCoffeeAction } from '../reducers/cart/actions'
import { Coffee, CartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  coffees: Coffee[]
  addNewCoffee: (newCoffee: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      coffees: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        coffees: [],
      }
    },
  )

  const { coffees } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addNewCoffee(newCoffee: Coffee) {
    dispatch(addNewCoffeeAction(newCoffee))
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addNewCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
