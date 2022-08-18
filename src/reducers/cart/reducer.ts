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
    default:
      return state
  }
}
