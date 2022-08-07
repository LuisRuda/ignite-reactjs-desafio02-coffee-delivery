import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffee Delivery" />

      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
