import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <form action="">
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <p>Endereço da Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>

          <div>
            <div>
              <img src="" alt="" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
      </section>
    </CheckoutContainer>
  )
}
