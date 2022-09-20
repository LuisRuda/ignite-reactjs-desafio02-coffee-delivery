import { ICheckoutFormData } from '../../pages/Checkout'

export enum ActionTypes {
  SAVE_CHECKOUT_FORM_VALUES = 'SAVE_CHECKOUT_FORM_VALUES',
}

export function saveCheckoutFormValuesAction(
  checkoutFormValues: ICheckoutFormData,
) {
  return {
    type: ActionTypes.SAVE_CHECKOUT_FORM_VALUES,
    payload: {
      checkoutFormValues,
    },
  }
}
