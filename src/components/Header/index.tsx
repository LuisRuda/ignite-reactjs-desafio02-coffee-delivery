import { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { logoCoffeeDelivery } from '../../assets'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContainer, CartLink } from './styles'

export function Header() {
  const { coffees } = useContext(CartContext)

  const coffeesCounter = coffees.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="Coffee Delivery" />
      </NavLink>

      <nav>
        <span>
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </span>

        <CartLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          {coffeesCounter > 0 && <span>{coffeesCounter}</span>}
        </CartLink>
      </nav>
    </HeaderContainer>
  )
}
