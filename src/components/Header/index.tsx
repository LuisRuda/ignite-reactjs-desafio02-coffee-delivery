import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { logoCoffeeDelivery } from '../../assets'

export function Header() {
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

        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
