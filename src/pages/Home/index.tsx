import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  HomeContainer,
  InfoContainer,
  Title,
  Subtitle,
  DetailsContainer,
  ImageContainer,
  Detail,
  IconRoundedBase,
} from './styles'

import imageCoffeeDelivery from '../../assets/coffee-delivery.svg'

export function Home() {
  return (
    <HomeContainer>
      <section>
        <InfoContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <DetailsContainer>
            <Detail>
              <IconRoundedBase background="yellow-900">
                <ShoppingCart size={16} weight="fill" />
              </IconRoundedBase>
              <span>Compra simples e segura</span>
            </Detail>
            <Detail>
              <IconRoundedBase>
                <Package size={16} weight="fill" />
              </IconRoundedBase>
              <span>Embalagem mantém o café intacto</span>
            </Detail>
            <Detail>
              <IconRoundedBase background="yellow-500">
                <Timer size={16} weight="fill" />
              </IconRoundedBase>
              <span>Entrega rápida e rastreada</span>
            </Detail>
            <Detail>
              <IconRoundedBase background="purple-500">
                <Coffee size={16} weight="fill" />
              </IconRoundedBase>
              <span>O café chega fresquinho até você</span>
            </Detail>
          </DetailsContainer>
        </InfoContainer>

        <ImageContainer>
          <img
            src={imageCoffeeDelivery}
            alt="Copo de café, graõs de café e café moído"
          />
        </ImageContainer>
      </section>
    </HomeContainer>
  )
}
