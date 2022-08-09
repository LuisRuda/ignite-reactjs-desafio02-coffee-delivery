interface ICoffeeData {
  image: string
  name: string
  description: string
  tags: string[]
  price: number
}

export interface ICardProps {
  coffee: ICoffeeData
}
