import { ICardProps } from './types'
import { CardContainer } from './styles'

export function Card({ coffee }: ICardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.name} />
      {coffee.tags.length && (
        <div>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>

      <div>
        <div>
          <span>R$</span>
          <span>{coffee.price}</span>
        </div>
        <div>
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <button></button>
        </div>
      </div>
    </CardContainer>
  )
}
