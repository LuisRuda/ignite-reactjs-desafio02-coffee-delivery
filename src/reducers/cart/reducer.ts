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
      const { newCoffee } = action.payload

      const coffeeIndex = state.coffees.findIndex(
        (cf) => cf.id === newCoffee.id,
      )

      toast.success('Café adicionado ao seu carrinho!')
      if (coffeeIndex >= 0) {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex] = newCoffee
        })
      }
      return produce(state, (draft) => {
        draft.coffees.push(newCoffee)
      })
    }
    case ActionTypes.UPDATA_COFFEE: {
      const { updateCoffee } = action.payload

      const coffeeIndex = state.coffees.findIndex(
        (cf) => cf.id === updateCoffee.id,
      )

      if (coffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount = updateCoffee.amount
      })
    }
    case ActionTypes.REMOVE_COFFEE: {
      const { coffeeId } = action.payload

      const coffeeIndex = state.coffees.findIndex((cf) => cf.id === coffeeId)

      if (coffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1)
      })
    }
    default:
      return state
  }
}
