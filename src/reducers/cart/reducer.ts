import { produce } from 'immer'
import { toast } from 'react-toastify'

import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  image: string
  price: number
  amount: number
}

interface CartState {
  coffees: Coffee[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const coffeeIndex = state.coffees.findIndex(
        (cf) => cf.id === action.payload.newCoffee.id,
      )

      toast.success('Café adicionado ao seu carrinho!')
      if (coffeeIndex >= 0) {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex] = action.payload.newCoffee
        })
      }
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.newCoffee)
      })
    }
    default:
      return state
  }
}
