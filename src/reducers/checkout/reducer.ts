import { produce } from 'immer'

import { ActionTypes } from './actions'

import { ICheckoutFormData } from '../../pages/Checkout'

interface ICheckoutState {
  checkoutFormState: ICheckoutFormData
}

export function CheckoutReducer(state: ICheckoutState, action: any) {
  switch (action.type) {
    case ActionTypes.SAVE_CHECKOUT_FORM_VALUES: {
      const { checkoutFormValues } = action.payload

      return produce(state, (draft) => {
        draft.checkoutFormState = checkoutFormValues
      })
    }
    default:
      return state
  }
}
