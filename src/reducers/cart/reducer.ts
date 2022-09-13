import { produce } from 'immer'
import { toast } from 'react-toastify'

import { ActionTypes } from './actions'

export interface ICoffee {
  id: string
  name: string
  image: string
  price: number
  amount: number
}

interface ICartState {
  coffees: ICoffee[]
}

export function CartReducer(state: ICartState, action: any) {
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
    case ActionTypes.UPDATA_COFFEE: {
      const { id, amount } = action.payload.updateCoffee

      const coffeeIndex = state.coffees.findIndex((cf) => cf.id === id)

      if (coffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount = amount
      })
    }
    default:
      return state
  }
}
