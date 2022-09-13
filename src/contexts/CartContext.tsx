import { createContext, ReactNode, useReducer, useEffect } from 'react'

import {
  addNewCoffeeAction,
  updateCoffeeAction,
  removeCoffeeAction,
} from '../reducers/cart/actions'
import { ICoffee, CartReducer } from '../reducers/cart/reducer'

export interface IUpdateCoffee {
  id: string
  amount: number
}

interface ICartContextType {
  coffees: ICoffee[]
  addNewCoffee: (newCoffee: ICoffee) => void
  updateCoffee: (updateCoffee: IUpdateCoffee) => void
  removeCoffee: (coffeeId: string) => void
}

export const CartContext = createContext({} as ICartContextType)

interface ICartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
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

  function addNewCoffee(newCoffee: ICoffee) {
    dispatch(addNewCoffeeAction(newCoffee))
  }

  function updateCoffee(coffeeUpdate: IUpdateCoffee) {
    dispatch(updateCoffeeAction(coffeeUpdate))
  }

  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addNewCoffee,
        updateCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
