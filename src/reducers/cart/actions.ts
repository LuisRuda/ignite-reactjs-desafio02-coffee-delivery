import { ICoffee } from './reducer'
import { IUpdateCoffee } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  UPDATA_COFFEE = 'UPDATA_COFFEE',
}

export function addNewCoffeeAction(newCoffee: ICoffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function updateCoffeeAction(updateCoffee: IUpdateCoffee) {
  return {
    type: ActionTypes.UPDATA_COFFEE,
    payload: {
      updateCoffee,
    },
  }
}
